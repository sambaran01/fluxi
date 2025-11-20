// Funny responses arrays
export const roasts: string[] = [
    "is built different... differently broken 💀",
    "has the energy of a Windows Vista laptop",
    "thinks they're the main character but they're an NPC fr",
    "peaked in 2019 and it shows",
    "has the vibe of stale bread ngl",
    "is the human equivalent of a buffering video",
    "woke up and chose mid today",
    "has participation trophy energy",
    "is proof that god has favorites... and they ain't one of them",
    "got ratio'd by life itself"
];

export const compliments: string[] = [
    "is literally carrying the whole squad fr fr",
    "has main character energy and I'm here for it",
    "is so cool that ice gets jealous",
    "could make a rock blush with that charisma",
    "is the blueprint, the standard, the moment",
    "has that legendary aura no cap",
    "makes the sun look dim bro",
    "is the definition of built different",
    "could sell sand to a beach and make profit",
    "has more talent in their pinky than most people have total"
];

export const facts: string[] = [
    "Honey never spoils. Archaeologists found 3000-year-old honey in Egyptian tombs that's still edible!",
    "Octopuses have three hearts and blue blood.",
    "Bananas are berries, but strawberries aren't.",
    "A day on Venus is longer than a year on Venus.",
    "Sharks existed before trees.",
    "The odds of shuffling a deck of cards into the same order twice are basically impossible.",
    "Your brain uses 20% of your body's energy despite being only 2% of your weight.",
    "There are more possible iterations of a chess game than atoms in the observable universe.",
    "Wombat poop is cube-shaped.",
    "The Eiffel Tower can be 15 cm taller during summer due to thermal expansion."
];

export const magicBall: string[] = [
    "Yes, definitely bro",
    "Nah fr you're cooked",
    "Maybe? Idk I'm just a bot",
    "100% yes no cap",
    "Not looking good chief",
    "Ask again when I'm not busy",
    "That's a W waiting to happen",
    "Big L energy on that one",
    "The stars say... maybe",
    "Bro I wouldn't bet on it"
];

export const truthQuestions: string[] = [
    "What's the most embarrassing thing you've done this week?",
    "If you could delete one app from existence, which would it be?",
    "What's your most cringe social media post?",
    "Who was your first crush and why?",
    "What's a secret you've never told anyone?",
    "What's your guilty pleasure show/song?",
    "Have you ever lied to your best friend? About what?",
    "What's the last lie you told?",
    "Who in this server annoys you the most?",
    "What's something you pretend to like but actually hate?"
];

export const dareQuestions: string[] = [
    "Change your nickname to 'GigaChad' for 24 hours",
    "Send a voice message singing your favorite song",
    "Type your next 10 messages ONLY IN CAPS",
    "React to every message for the next 5 minutes with random emojis",
    "Change your pfp to the last meme you saved",
    "Compliment everyone in the server (at least 5 people)",
    "Tell a dad joke and wait for reactions",
    "Ask someone to rate your playlist",
    "Send the oldest photo in your camera roll",
    "Do 20 pushups and post proof"
];

export const slotEmojis: string[] = ['🍒', '🍋', '🍊', '🍇', '💎', '7️⃣'];

export function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomChoice<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

export function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
