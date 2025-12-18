# 🎨 ChromeFlow - Image Generator Extension

A powerful Chrome extension inspired by Google Flow for quick and easy image generation using AI models.

## Features

✨ **Fast Image Generation** - Generate stunning images with a single click
🎨 **Multiple Aspect Ratios** - Support for Square (1:1), Landscape (16:9), and Portrait (9:16)
📊 **Batch Generation** - Generate 1-4 images simultaneously
⚙️ **Easy Settings** - Store your API key securely in Chrome Storage
🎯 **Flow-Inspired UI** - Beautiful, intuitive interface inspired by Google Flow

## Installation

### Prerequisites

- Google Chrome (Version 88 or later)
- - Replicate API Key (Free account available at https://replicate.com)
 
  - ### Setup Steps
 
  - 1. **Clone the Repository**
    2.    ```bash
             git clone https://github.com/tonimaxx/chromeflow.git
             cd chromeflow
             ```

          2. **Load the Extension**
          3.    - Open Chrome and go to `chrome://extensions/`
                -    - Enable "Developer mode" (top right corner)
                     -    - Click "Load unpacked"
                          -    - Select the `chromeflow` folder
                               -    - The extension icon will appear in your toolbar
                                
                                    - 3. **Get Your API Key**
                                      4.    - Visit https://replicate.com
                                            -    - Sign up for a free account
                                                 -    - Go to https://replicate.com/account
                                                      -    - Copy your API key
                                                       
                                                           - 4. **Configure the Extension**
                                                             5.    - Click the extension icon in your toolbar
                                                                   -    - Click the ⚙️ settings button
                                                                        -    - Paste your Replicate API key
                                                                             -    - Select your preferred model (Stable Diffusion 1.5 or SDXL)
                                                                                  -    - Click "Save Settings"
                                                                                   
                                                                                       - ## Usage
                                                                                   
                                                                                       - 1. **Open the Extension**
                                                                                         2.    - Click the extension icon in your Chrome toolbar
                                                                                           
                                                                                               - 2. **Enter Your Prompt**
                                                                                                 3.    - Type a detailed description of the image you want to generate
                                                                                                       -    - Example: "a fluffy orange cat wearing sunglasses on a beach"
                                                                                                        
                                                                                                            - 3. **Customize Settings**
                                                                                                              4.    - **Aspect Ratio**: Choose between Square, Landscape, or Portrait
                                                                                                                    -    - **Outputs**: Select how many images to generate (1-4)
                                                                                                                     
                                                                                                                         - 4. **Generate**
                                                                                                                           5.    - Click the "🚀 Generate" button
                                                                                                                                 -    - Wait for the images to be generated
                                                                                                                                      -    - View and interact with your results
                                                                                                                                       
                                                                                                                                           - ## File Structure
                                                                                                                                       
                                                                                                                                           - ```
                                                                                                                                             chromeflow/
                                                                                                                                             ├── manifest.json      # Chrome extension manifest
                                                                                                                                             ├── popup.html         # UI template
                                                                                                                                             ├── popup.css          # Styling
                                                                                                                                             ├── popup.js           # Main logic & UI interactions
                                                                                                                                             ├── background.js      # Background service worker
                                                                                                                                             └── README.md          # This file
                                                                                                                                             ```
                                                                                                                                             
                                                                                                                                             ## Technologies Used
                                                                                                                                             
                                                                                                                                             - **JavaScript (ES6+)** - Core functionality
                                                                                                                                             - - **Chrome Extension APIs** - Storage & runtime
                                                                                                                                               - - **Replicate API** - Image generation backend
                                                                                                                                                 - - **CSS3** - Modern styling with gradients and animations
                                                                                                                                                  
                                                                                                                                                   - ## API Integration
                                                                                                                                                  
                                                                                                                                                   - The extension uses the Replicate API for image generation:
                                                                                                                                                   - - **Base URL**: https://api.replicate.com/v1/predictions
                                                                                                                                                     - - **Models**: Stable Diffusion 1.5, SDXL
                                                                                                                                                       - - **Authentication**: Token-based (personal API key)
                                                                                                                                                        
                                                                                                                                                         - ## Configuration
                                                                                                                                                        
                                                                                                                                                         - ### Supported Models
                                                                                                                                                        
                                                                                                                                                         - - `stability-ai/stable-diffusion` - Fast, high-quality image generation
                                                                                                                                                           - - `stability-ai/sdxl` - Enhanced model with better quality
                                                                                                                                                            
                                                                                                                                                             - ### Default Settings
                                                                                                                                                            
                                                                                                                                                             - - Model: Stable Diffusion 1.5
                                                                                                                                                               - - Inference Steps: 20
                                                                                                                                                                 - - Guidance Scale: 7.5
                                                                                                                                                                   - - Aspect Ratios: 1:1, 16:9, 9:16
                                                                                                                                                                    
                                                                                                                                                                     - ## Keyboard Shortcuts
                                                                                                                                                                    
                                                                                                                                                                     - Currently supports standard Chrome extension interactions. Future versions may include keyboard shortcuts.
                                                                                                                                                                    
                                                                                                                                                                     - ## Troubleshooting
                                                                                                                                                                    
                                                                                                                                                                     - ### "API request failed"
                                                                                                                                                                     - - Verify your API key is correct
                                                                                                                                                                       - - Check your Replicate account balance
                                                                                                                                                                         - - Ensure you have internet connectivity
                                                                                                                                                                          
                                                                                                                                                                           - ### "Request timeout"
                                                                                                                                                                           - - Try again with a simpler prompt
                                                                                                                                                                             - - Check Replicate service status
                                                                                                                                                                              
                                                                                                                                                                               - ### Extension Not Appearing
                                                                                                                                                                               - - Ensure Developer mode is enabled
                                                                                                                                                                                 - - Try unpacking and re-loading the extension
                                                                                                                                                                                  
                                                                                                                                                                                   - ## Privacy & Security
                                                                                                                                                                                  
                                                                                                                                                                                   - - Your API key is stored locally in Chrome Storage
                                                                                                                                                                                     - - Images are generated on Replicate's servers
                                                                                                                                                                                       - - No data is sent to external servers except Replicate API
                                                                                                                                                                                         - - Always use a strong, unique API key
                                                                                                                                                                                          
                                                                                                                                                                                           - ## Limitations
                                                                                                                                                                                          
                                                                                                                                                                                           - - Maximum of 4 images per generation
                                                                                                                                                                                             - - Image generation time depends on server load
                                                                                                                                                                                               - - API rate limits apply based on your Replicate account
                                                                                                                                                                                                
                                                                                                                                                                                                 - ## Future Enhancements
                                                                                                                                                                                                
                                                                                                                                                                                                 - - [ ] Advanced image settings (seed, scale, etc.)
                                                                                                                                                                                                   - [ ] - [ ] Image history and management
                                                                                                                                                                                                   - [ ] - [ ] Multiple model support
                                                                                                                                                                                                   - [ ] - [ ] Custom style presets
                                                                                                                                                                                                   - [ ] - [ ] Keyboard shortcuts
                                                                                                                                                                                                   - [ ] - [ ] Dark/Light theme toggle
                                                                                                                                                                                                  
                                                                                                                                                                                                   - [ ] ## Contributing
                                                                                                                                                                                                  
                                                                                                                                                                                                   - [ ] Contributions are welcome! Feel free to:
                                                                                                                                                                                                   - [ ] - Report bugs
                                                                                                                                                                                                   - [ ] - Suggest features
                                                                                                                                                                                                   - [ ] - Submit pull requests
                                                                                                                                                                                                  
                                                                                                                                                                                                   - [ ] ## License
                                                                                                                                                                                                  
                                                                                                                                                                                                   - [ ] MIT License - feel free to use this project for personal or commercial purposes.
                                                                                                                                                                                                  
                                                                                                                                                                                                   - [ ] ## Support
                                                                                                                                                                                                  
                                                                                                                                                                                                   - [ ] Need help?
                                                                                                                                                                                                   - [ ] - Check the Replicate documentation: https://replicate.com/docs
                                                                                                                                                                                                   - [ ] - Visit Chrome Extension docs: https://developer.chrome.com/docs/extensions/
                                                                                                                                                                                                  
                                                                                                                                                                                                   - [ ] ## Credits
                                                                                                                                                                                                  
                                                                                                                                                                                                   - [ ] Built with inspiration from Google Flow - making AI image generation accessible to everyone.
                                                                                                                                                                                                  
                                                                                                                                                                                                   - [ ] ---
                                                                                                                                                                                                   
                                                                                                                                                                                                   **Enjoy creating amazing images! 🎨✨**
