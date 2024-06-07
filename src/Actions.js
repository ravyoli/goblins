const Actions = [
    {
        type: 'sound',
        clip: 'close_eyes.m4a',
        text: '.לילה טוב כולם, עצמו עיניים'
    },
    {
        type: 'wait',
        seconds: 2,
        text: 'השהייה'
    },

    {
        card: 'alien',
        type: 'sound',
        clip: 'alien_wake_up.m4a',
        text: 'חייזר התעורר, באפשרותך לשים על קלף של שחקן אחר את דיסקית החללית.'
    },    
    {
        card: 'alien',
        type: 'wait',
        seconds: 5,
        text: 'השהייה'
    },
    {
        card: 'alien',
        type: 'sound',
        clip: 'alien_close_eyes.m4a',
        text: 'חייזר עצום עיניים.'
    },


    {
        card: 'tech',
        type: 'sound',
        clip: 'tech_wake_up.m4a',
        text: 'טכנאי התעורר,'
    },    
    {
        card: 'tech',
        type: 'wait',
        seconds: 5,
        text: 'השהייה'
    },
    {
        card: 'tech',
        type: 'sound',
        clip: 'tech_close_eyes.m4a',
        text: 'טכנאי עצום עיניים.'
    },



    {
        card: 'goblin',
        type: 'sound',
        clip: 'goblins_wake_up.m4a',
        text: 'גובלינים התעוררו וחפשו את שותפיכם. אם ישנו רק גולבין אחד במשחק הוא רשאי לצפות בקלף אחד מתוך אילו הנמצאים במרכז השולחן.'
    },
    {
        card: 'goblin',
        type: 'wait',
        seconds: 5,
        text: 'השהייה'
    },
    {
        card: 'goblin',
        type: 'sound',
        clip: 'goblins_close_eyes.m4a',
        text: 'גובלינים עצמו עיניים.'
    },

    {
        type: 'sound',
        clip: 'all_wake_up.m4a',
        text: 'בוקר טוב כולם.'
    },
]

export default Actions;