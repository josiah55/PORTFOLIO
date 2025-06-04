        // Get template ID from URL
        const params = new URLSearchParams(window.location.search);
        const templateId = params.get('template');

        const downloadLink = document.getElementById('download-link');
        const downloadMsg = document.getElementById('download-msg');

        // Map template IDs to download URLs (update URLs with your actual files)
        const templateDownloads = {
            'business-starter': '/Downloads/business-starter-template.zip',
            'creative-portfolio': 'downloads/creative-portfolio.zip',
            'ecommerce-shop': 'downloads/ecommerce-shop.zip',
            'agency-landing-page': '/Downloads/agency-landing-page.zip'
        };

        if (templateId && templateDownloads[templateId]) {
            downloadLink.href = templateDownloads[templateId];
            downloadMsg.textContent = "✅ Click the button below to download your template.";
        } else {
            downloadMsg.textContent = "⚠️ Sorry, we couldn't find your template. Please contact support.";
            downloadLink.style.display = 'none';
        }