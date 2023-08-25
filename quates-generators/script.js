function generateQuate(){
    const quates = [
        {by: 'Benjamin Franklin', quate: 'Well done is better than well said.'},
        {by: 'Helen Keller', quate: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.'},
        {by: 'Aristotle', quate: 'It is during our darkest moments that we must focus to see the light.'},
        {by: 'Ralph Waldo Emerson', quate: 'Do not go where the path may lead, go instead where there is no path and leave a trail.'},
        {by: 'Oscar Wilde', quate: 'Be yourself; everyone else is already taken.'},
        {by: 'Mahatma Gandhi', quate: 'You must be the change you wish to see in the world.'},
        {by: 'Mother Teresa', quate: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.'},
    ];

    let random = Math.floor(Math.random() * quates.length);
    document.getElementById('by').innerHTML = quates[random].by;
    document.getElementById('paragraph').innerHTML = quates[random].quate;
}