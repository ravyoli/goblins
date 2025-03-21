const Actions = [
    {
        type: 'sound',
        clip: 'close_eyes.m4a',
        text: 'לילה טוב כולם, עצמו עיניים.'
    },
    {
        type: 'const_wait',
        seconds: 2,
        text: 'השהייה ל 2 שניות'
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
        text: 'השהייה'
    },
    {
        card: 'alien',
        type: 'sound',
        clip: 'alien_close_eyes.m4a',
        text: 'חייזר עצום את עינייך.'
    },


    {
        card: 'tech',
        type: 'sound',
        clip: 'tech_wake_up.m4a',
        text: 'טכנאי התעורר, ברשותך לשים על קלף של שחקן אחר את דיסקית המגן.'
    },    
    {
        card: 'tech',
        type: 'wait',
        text: 'השהייה'
    },
    {
        card: 'tech',
        type: 'sound',
        clip: 'tech_close_eyes.m4a',
        text: 'טכנאי עצום את עינייך.'
    },


    {
        card: 'soldier',
        type: 'sound',
        clip: 'soldier_wake_up.m4a',
        text: 'חיילת פיקחי את עינייך. את יכולה להוציא דיסקית אחת מדמות, אם אין דיסקיות בכלל, אז את יכולה לשים את דיסקית המגן'
    },    
    {
        card: 'soldier',
        type: 'wait',
        text: 'השהייה'
    },
    {
        card: 'soldier',
        type: 'sound',
        clip: 'soldier_close_eyes.m4a',
        text: 'חיילת עצמי את עינייך.'
    },




    {
        card: 'goblin',
        type: 'sound',
        clip: 'goblins_wake_up.m4a',
        text: 'גובלינים התעוררו וחפשו את שותפיכם. אם ישנו רק גובלין אחד במשחק הוא רשאי לצפות בקלף אחד מתוך אילו הנמצאים במרכז השולחן.'
    },
    {
        card: 'goblin',
        type: 'wait',
        text: 'השהייה'
    },
    {
        card: 'goblin',
        type: 'sound',
        clip: 'goblins_close_eyes.m4a',
        text: 'גובלינים עצמו עיניים.'
    },

    {
        card: 'teacher_student',
        type: 'sound',
        clip: 'teacher_and_student_wake_up.m4a',
        text: 'מורה ותלמיד התעוררו. אם יש במשחק גם מורה וגם תלמיד, אז מורה תראה לתלמיד קלף ממרכז השולחן, מבלי שתראה אותו. אם יש או מורה או תלמיד לבד, אתם לא עושים כלום.'
    },
    {
        card: 'teacher_student',
        type: 'wait',
        text: 'השהייה'
    },
    {
        card: 'teacher_student',
        type: 'sound',
        clip: 'teacher_and_student_close_eyes.m4a',
        text: 'מורה ותלמיד עצמו את עיניכם'
    },

    {
        card: 'judge',
        type: 'sound',
        clip: 'judge_wake_up.m4a',
        text: 'שופט התעורר, ברשותך לצפות בקלף אחד מתוך אילו הנמצאים במרכז השולחן.'
    },
    {
        card: 'judge',
        type: 'wait',
        seconds: 5,
        text: 'השהייה'
    },
    {
        card: 'judge',
        type: 'sound',
        clip: 'judge_close_eyes.m4a',
        text: 'שופט עצום את עיניך.'
    },

    {
        card: 'pilot',
        type: 'sound',
        clip: 'pilot_wake_up.m4a',
        text: 'טייס התעורר, תוכל להחליף את הקלף שלך בקלף של שחקן אחר, להתבונן בקלף, ולאחר מכן להחליפו עם קלף ממרכז השולחן מבלי להסתכל בו.'
    },
    {
        card: 'pilot',
        type: 'wait',
        text: 'השהייה'
    },
    {
        card: 'pilot',
        type: 'sound',
        clip: 'pilot_close_eyes.m4a',
        text: 'טייס עצום את עיניך.'
    },



    {
        card: 'troublemaker',
        type: 'sound',
        clip: 'troublemaker_wake_up.m4a',
        text: 'תככן התעורר, ברשותך להחליף בין קלף של שחקן אחר לבין קלף ממרכז השולחן מבלי להסתכל בהם.'
    },
    {
        card: 'troublemaker',
        type: 'wait',
        text: 'השהייה'
    },
    {
        card: 'troublemaker',
        type: 'sound',
        clip: 'troublemaker_close_eyes.m4a',
        text: 'תככן עצום את עיניך.'
    },


    {
        card: 'footballer',
        type: 'sound',
        clip: 'footballer_wake_up.m4a',
        text: 'כדורגלן התעורר, ברשותך להזיז את כל הקלפים, כולל שלך, עם כיוון השעון.'
    },
    {
        card: 'footballer',
        type: 'wait',
        text: 'השהייה'
    },
    {
        card: 'footballer',
        type: 'sound',
        clip: 'footballer_close_eyes.m4a',
        text: 'כדורגלן עצום את עיניך.'
    },




    {
        card: 'commander',
        type: 'sound',
        clip: 'commander_wake_up.m4a',
        text: 'מפקד התעורר, עליך להחליף את הקלף עם קלף ממרכז השולחן, מבלי להסתכל בו, ולאחר מכן ברשותך להחליף קלף זה עם קלף אחר ממרכז השולחן ולהסתכל בו.'
    },
    {
        card: 'commander',
        type: 'wait',
        text: 'השהייה'
    },
    {
        card: 'commander',
        type: 'sound',
        clip: 'commander_close_eyes.m4a',
        text: 'מפקד עצום את עיניך.'
    },


    {
        card: 'farmer',
        type: 'sound',
        clip: 'farmer_wake_up.m4a',
        text: 'חקלאי התעורר, ברשותך להציץ בכל הקלפים במרכז השולחן. אתה יכול לגלות רק אחד מהקלפים שראית.'
    },
    {
        card: 'farmer',
        type: 'wait',
        text: 'השהייה'
    },
    {
        card: 'farmer',
        type: 'sound',
        clip: 'farmer_close_eyes.m4a',
        text: 'חקלאי עצום את עיניך.'
    },

    
    {
        card: 'explorer',
        type: 'sound',
        clip: 'explorer_wake_up.m4a',
        text: 'חוקרת, פיקחי את עינייך. ברשותך להציץ בקלף אחד של מי שלידך, איזה צד שאת רוצה.'
    },
    {
        card: 'explorer',
        type: 'wait',
        text: 'השהייה'
    },
    {
        card: 'explorer',
        type: 'sound',
        clip: 'explorer_close_eyes.m4a',
        text: 'חוקרת עיצמי את עינייך.'
    },



    {
        type: 'sound',
        clip: 'all_wake_up.m4a',
        text: 'בוקר טוב כולם.'
    },
]

export default Actions;