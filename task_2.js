document.getElementById('analyzeBtn').addEventListener('click', () => {
    const textInput = document.getElementById('textInput').value;
    if (textInput.trim() === '') {
        alert('Please enter some text for analysis.');
        return;
    }

    // Replace 'YOUR_API_KEY' with your actual MeaningCloud API key
    const apiKey = 'd3ef343492415d87042d0268cc8b857d';
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&txt=${encodeURIComponent(textInput)}&lang=en`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const sentiment = data.score_tag;
            let resultText = '';
            switch (sentiment) {
                case 'P+':
                case 'P':
                    resultText = 'Positive';
                    break;
                case 'N+':
                case 'N':
                    resultText = 'Negative';
                    break;
                case 'NEU':
                    resultText = 'Neutral';
                    break;
                default:
                    resultText = 'Unable to determine sentiment';
            }
            document.getElementById('result').innerText = `Sentiment: ${resultText}`;
        })
        .catch(error => {
            console.error('Error analyzing sentiment:', error);
            document.getElementById('result').innerText = 'Error analyzing sentiment';
        });
});
