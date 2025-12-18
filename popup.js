// DOM Elements
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const generatorPanel = document.getElementById('generatorPanel');
const resultsPanel = document.getElementById('resultsPanel');
const promptInput = document.getElementById('prompt');
const aspectRatioSelect = document.getElementById('aspectRatio');
const outputsSelect = document.getElementById('outputs');
const generateBtn = document.getElementById('generateBtn');
const backBtn = document.getElementById('backBtn');
const resultsDiv = document.getElementById('results');
const loadingDiv = document.getElementById('loading');
const apiKeyInput = document.getElementById('apiKey');
const modelSelect = document.getElementById('model');
const saveSettingsBtn = document.getElementById('saveSettings');

let currentApiKey = null;
let currentModel = null;

document.addEventListener('DOMContentLoaded', async () => {
    loadSettings();
    setupEventListeners();
});

function setupEventListeners() {
    settingsBtn.addEventListener('click', (e) => {
          e.preventDefault();
          settingsPanel.classList.toggle('hidden');
          generatorPanel.classList.toggle('hidden');
    });

  saveSettingsBtn.addEventListener('click', saveSettings);
    generateBtn.addEventListener('click', generateImages);
    backBtn.addEventListener('click', goBack);
}

async function saveSettings() {
    const apiKey = apiKeyInput.value.trim();
    const model = modelSelect.value;

  if (!apiKey) {
        alert('Please enter an API key');
        return;
  }

  chrome.storage.local.set({
        apiKey: apiKey,
        model: model
  }, () => {
        currentApiKey = apiKey;
        currentModel = model;
        alert('Settings saved!');
        settingsPanel.classList.add('hidden');
        generatorPanel.classList.remove('hidden');
  });
}

async function loadSettings() {
    chrome.storage.local.get(['apiKey', 'model'], (result) => {
          if (result.apiKey) {
                  currentApiKey = result.apiKey;
                  apiKeyInput.value = result.apiKey;
          }
          if (result.model) {
                  currentModel = result.model;
                  modelSelect.value = result.model;
          }
    });
}

async function generateImages() {
    const prompt = promptInput.value.trim();
    const aspectRatio = aspectRatioSelect.value;
    const outputs = parseInt(outputsSelect.value);

  if (!prompt) {
        alert('Please enter a prompt');
        return;
  }

  if (!currentApiKey) {
        alert('Please set your API key in settings first');
        settingsPanel.classList.remove('hidden');
        generatorPanel.classList.add('hidden');
        return;
  }

  generatorPanel.classList.add('hidden');
    resultsPanel.classList.remove('hidden');
    loadingDiv.classList.remove('hidden');
    resultsDiv.innerHTML = '';
    generateBtn.disabled = true;

  try {
        const [w, h] = aspectRatio.split(':').map(Number);
        const width = 512;
        const height = Math.round(512 * (h / w));

      const response = await fetch('https://api.replicate.com/v1/predictions', {
              method: 'POST',
              headers: {
                        'Authorization': `Token ${currentApiKey}`,
                        'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                        version: '27b93a2413e7f36cd83da926f3d66d1d6de577667973fefba96d60d6e07eca76',
                        input: {
                                    prompt: prompt,
                                    width: width,
                                    height: height,
                                    num_outputs: outputs,
                                    num_inference_steps: 20,
                                    guidance_scale: 7.5
                        }
              })
      });

      if (!response.ok) throw new Error('API request failed');

      const prediction = await response.json();

      let complete = false;
        let attempts = 0;

      while (!complete && attempts < 120) {
              await new Promise(resolve => setTimeout(resolve, 1000));

          const statusResponse = await fetch(
                    `https://api.replicate.com/v1/predictions/${prediction.id}`,
            { headers: { 'Authorization': `Token ${currentApiKey}` } }
                  );

          const status = await statusResponse.json();

          if (status.status === 'succeeded') {
                    complete = true;
                    displayResults(status.output);
          } else if (status.status === 'failed') {
                    throw new Error('Image generation failed');
          }

          attempts++;
      }

      if (!complete) throw new Error('Request timeout');

  } catch (error) {
        console.error('Error:', error);
        resultsDiv.innerHTML = `<div style="color:red;">Error: ${error.message}</div>`;
  } finally {
        loadingDiv.classList.add('hidden');
        generateBtn.disabled = false;
  }
}

function displayResults(images) {
    resultsDiv.innerHTML = '';

  images.forEach((imageUrl, index) => {
        const item = document.createElement('div');
        item.className = 'result-item';

                     item.innerHTML = `
                           <img src="${imageUrl}" alt="Generated image ${index + 1}">
                               `;

                     resultsDiv.appendChild(item);
  });
}

function goBack() {
    resultsPanel.classList.add('hidden');
    generatorPanel.classList.remove('hidden');
    promptInput.focus();
}
