// Design Navigation Widget
// Add this script to any design page to enable easy navigation between designs

(function() {
    // Create the navigation widget
    const navWidget = document.createElement('div');
    navWidget.id = 'design-nav-widget';
    navWidget.innerHTML = `
        <style>
            #design-nav-widget {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 10000;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            }
            
            #design-nav-toggle {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, #1a5f4f 0%, #2c6e49 100%);
                border: 3px solid #d4af37;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 24px;
                transition: all 0.3s ease;
            }
            
            #design-nav-toggle:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);
            }
            
            #design-nav-menu {
                position: absolute;
                bottom: 70px;
                right: 0;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
                border-radius: 16px;
                padding: 1.5rem;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                border: 2px solid #d4af37;
                min-width: 280px;
                display: none;
                opacity: 0;
                transform: translateY(10px);
                transition: all 0.3s ease;
            }
            
            #design-nav-menu.show {
                display: block;
                opacity: 1;
                transform: translateY(0);
            }
            
            #design-nav-menu h3 {
                font-size: 1.1rem;
                color: #1a5f4f;
                margin-bottom: 1rem;
                font-weight: 600;
            }
            
            .design-nav-link {
                display: block;
                padding: 0.8rem 1rem;
                margin-bottom: 0.5rem;
                background: #f5f5f5;
                color: #1a1a1a;
                text-decoration: none;
                border-radius: 8px;
                transition: all 0.3s ease;
                font-size: 0.95rem;
                border: 2px solid transparent;
            }
            
            .design-nav-link:hover {
                background: #1a5f4f;
                color: white;
                transform: translateX(5px);
                border-color: #d4af37;
            }
            
            .design-nav-link.active {
                background: #d4af37;
                color: #1a1a1a;
                font-weight: 600;
                border-color: #1a5f4f;
            }
            
            .design-showcase-link {
                display: block;
                padding: 1rem;
                margin-top: 1rem;
                background: linear-gradient(135deg, #1a5f4f 0%, #2c6e49 100%);
                color: white;
                text-decoration: none;
                border-radius: 8px;
                text-align: center;
                font-weight: 600;
                border: 2px solid #d4af37;
                transition: all 0.3s ease;
            }
            
            .design-showcase-link:hover {
                transform: scale(1.05);
                box-shadow: 0 4px 16px rgba(26, 95, 79, 0.3);
            }
            
            @media (max-width: 768px) {
                #design-nav-widget {
                    bottom: 10px;
                    right: 10px;
                }
                
                #design-nav-toggle {
                    width: 50px;
                    height: 50px;
                    font-size: 20px;
                }
                
                #design-nav-menu {
                    min-width: 240px;
                    bottom: 60px;
                }
            }
        </style>
        
        <div id="design-nav-toggle" title="Bytt design">🎨</div>
        <div id="design-nav-menu">
            <h3>📐 Bytt Design</h3>
            <a href="index.html" class="design-nav-link" data-page="index.html">Hovuddesign</a>
            <a href="design1.html" class="design-nav-link" data-page="design1.html">Design 1</a>
            <a href="design2.html" class="design-nav-link" data-page="design2.html">Design 2</a>
            <a href="design3.html" class="design-nav-link" data-page="design3.html">Design 3</a>
            <a href="design4.html" class="design-nav-link" data-page="design4.html">Design 4</a>
            <a href="design6.html" class="design-nav-link" data-page="design6.html">Design 6</a>
            <a href="designs.html" class="design-showcase-link">📋 Alle Design</a>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(navWidget);
    
    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Highlight current page
    const links = navWidget.querySelectorAll('.design-nav-link');
    links.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Toggle menu
    const toggle = document.getElementById('design-nav-toggle');
    const menu = document.getElementById('design-nav-menu');
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navWidget.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
    
    // Prevent menu clicks from closing
    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
})();
