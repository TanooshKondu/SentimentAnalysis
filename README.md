# SentimentAnalysis
I have created a Sentment Analysis checker using html, css, javascript. It was a basic front-end project on web development. I have used APIs from meaning cloud site. 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sentiment Analysis</title>
    <link rel="stylesheet" type="text/css" href="task_2.css">
</head>
<body>
    <div class="container">
        <h1>Sentiment Analysis</h1>
        <textarea id="textInput" placeholder="Enter your text here..."></textarea>
        <button id="analyzeBtn">Analyze</button>
        <div id="result"></div>
    </div>
    <script src="task_2.js"></script>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #05f8f8, #d503f6); /* Replace with your preferred gradient colors */
}
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

textarea {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
    background-color: transparent;
    color:#fff;
}

button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    text-align: center;
}

#result {
    margin-top: 20px;
}
::placeholder{
    color:#fff;
}

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

Here I have used APIs from meaning cloud, i have used the API keys to initialize the sentiment analysis
