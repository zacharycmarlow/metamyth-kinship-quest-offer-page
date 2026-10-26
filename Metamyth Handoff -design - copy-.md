# Metamyth — Web Page Handoff (design + copy)

Use this file as project knowledge so Claude can edit the copy and rebuild the page in the same style. Part 1 is the design spec. Part 2 is the full page copy in order.

# PART 1 — DESIGN SPEC

## Format
Single scrolling cinematic web page (HTML/CSS/JS, no framework). Every section is a full-screen "scene" (painted image + dark gradient + text) or a calm "chapter" (text on deep green). Dramatic motion, slow and weighty.

## Color tokens
- Deep bg #091e14 (page), forest #0d3122, mid #123d2a, surface #1a4d34
- Gold #d4a843 (headline accents, rules, labels) · gold line rgba(212,168,67,.45) · gold faint rgba(212,168,67,.18)
- Teal #2ec4b0 (body highlights, links, "new game" emphasis) · teal bright #00d9c4 (hover)
- Cream #f0e8d0 (primary text), ivory #e8ddc0 (secondary), mist #b0c4bb (muted), smoke #607a6e
- Arc colors: I OriginStory gold #d4a843 · II Metamyth teal #2ec4b0 · III MythOS green #8bc472 · IV StoryLiving purple #c090c8
- No gradients on flat areas except image scrims. No emoji. No stock photos.

## Type
- Display: Pherome (serif, OTF), weight 400, line-height ~1.0, tight tracking -0.01em, text-wrap balance. H1 up to 140px, H2 44–96px, big pull quotes 32–68px centered.
- Labels: Futura, 12px, UPPERCASE, letter-spacing .32em, gold (or muted mist).
- Body: Futura 17–20px, line-height 1.65, cream/ivory; lede paragraphs 19–23px, max ~36em.
- Italic callouts use Pherome. Emphasis words inside headlines are wrapped gold; key phrases in body wrapped teal.
- Ornaments: ◆ ✦ as punctuation, thin gold rules (1px, 64px wide) and rules with center diamond.

## Layout
- Content width max 1320px, side padding clamp(20px,6vw,96px). Chapters have clamp(100px,16vh,200px) vertical padding.
- Grids: cols2 / cols3 / cols4, collapse to 1 column under 900px.
- Pillar: top border 1px gold line, label, title, muted paragraph.
- Item row (deliverable): 64px icon left + serif title + muted small description, thin gold bottom border.
- Proof stat: big gold Pherome number with soft gold glow, label, name, short story, gold top border.
- Fit lists: two columns, "Walk away if" (muted, red-ish dash) vs "But if" (teal glowing dash).
- Voices: three quotes with big gold opening quote mark, cite in gold label; below, a slow looping marquee of short testimonial lines separated by ◆.
- Guide cards: 4:5 portrait frame with gold hairline border, label, name, gold role line, short bio.
- Closing scene: centered, huge headline with one teal word glowing, outlined gold CTA button that fills gold on hover.
- Footer: three small uppercase labels, top border gold faint.

## Journey map section
SVG map, brand-styled (not a pasted image). Gold dotted path through four regions (the Shore, the Forge, the Kingdom, the Sky), each tinted its arc color with faint concentric contour rings and a huge low-opacity region name. Sky region is a scatter of stars. Each stop = circle (deep fill, arc-color ring) with the icon inside, number + UPPERCASE name label beside it. Clicking a stop moves a glowing traveler along the path, lights up the walked route, and fills a side panel (large icon, arc label, serif title, tagline in arc color, who/when, description) with Back / Onward buttons and a counter. Filter chips above switch arcs. Map spans nearly full page width, panel at left (below on mobile). No gamification, no treasure.

## Icons
Custom painterly PNG icon set (dark-bg only, never recolor, min 40px): sprout (OriginStory), north-star (Metamyth), sword (MythOS), butterfly (StoryLiving), plus scroll, shield-leaf, gate, dragon, crystal-ball, flag, megaphone, fountain, landscape, map, chalice, council, compass, bridge, pearl, wizard-hat, fire, globe. Use as bullets, one distinct icon per item.

## Motion
- Hero image slow Ken Burns (scale 1.25→1.04, 18s). Scene backgrounds have parallax drift on scroll.
- Headlines reveal word-by-word (each word slides up from a mask, 55ms stagger, 1.3s ease-out expo). Body blocks fade/rise 40px with optional blur-to-sharp. Groups stagger 0.12–0.18s.
- Stat numbers count up on first view. Strike-through "shift" lines draw through the old word. Thin gold-to-teal scroll progress bar at top. Nav shows current chapter name in small caps.
- Hover: gold → warmer gold, teal → brighter teal, icons lift and tilt slightly; buttons press to scale .97. Respect reduced motion.

## Imagery per scene (painterly, from the design system deck art)
Hero: butterfly nebula · Premise: forest path · Turning: dying earth · Proof: photo scene · Arc heroes: horizon, mountains, banner, cosmic city · Fit: wizard · Close: sunrise.

## Copy rules
Voice = the Storyteller: mythic, second person, short declaratives, no fluff, metaphor as the medium. "The science, the magic, the game" triad. Names: Zachary Marlow, Cataleya Morgan (confirm spelling: v4 uses "Cattaleya"), kinship guides. No pricing on the page unless the new offer calls for it. Do not use "generating everything your mission needs to spread" (inaccurate).

# PART 2 — CURRENT PAGE COPY




---
## 01 Hero

_The Story System · 2026_

### The future you dream is one story away.
An epic journey to take back your story and author reality itself. Ancient technology, backed by science, powered by modern magic.

---
## 02 Premise

_I · The Premise_

### The world is made of stories.See that, and everything changes.
The same narrative structure that runs your nervous system runs the global economy. Empires rise on it. Cult brands hypnotize millions with it. It has been running you on autopilot since before you could speak.

---
## 02b Pillars
Together we reveal the story you have always been living, and turn it into the power that runs your mission, your community, your offer and your future.

_✦ Ancient wisdom_
The grandmother around the fire knew how to reprogram her grandchildren's nervous systems. She just called it bedtime.

_✦ Neuroscience_
The brain fires the same circuits for a vividly told story as for a lived experience. Change the story, change the reality. The science confirmed what the grandmother already knew.

_✦ Modern magic_
A living intelligence trained on your whole journey, your voice and your values. Always available. Always in context.

---
## 03 Turning

_II · The Turning_

### The old story is collapsing in real time.
The people who see it are having the time of their lives writing what comes next.

---
## Footer
Personal transformation is a myth.We transform together, on a journey.

_The old game_
Agencies take over your company and turn you into a shopkeeper in someone else's empire. Consultants hand you a strategy from ChatGPT. Coaches coach coaches to be coaches. Even the winners burn out optimizing a game that was never worth winning.

_The new game_
An epic journey on the pattern of every great story, held by a family of kinship coaches. Your pain becomes the offer. Your breakthroughs become the content. The story draws in funding, team and community, and business goes onto easy mode.
All of it is one story away. Or an infinite number of excuses.

---
## 04 Four Scales

_III · One Journey_

### One journey. Four scales.

_I · Self_

**Write the book of your life.**
End the old story running you. You can't change what happened. You decide what it means.

_II · Mission_

**Forge the myth of your future.**
Dream forward until the vision draws people and funding before you chase them.

_III · Organization_

**Turn business into the ultimate game.**
Your business is a story too. Strategy, marketing, community and fundraising become one thing.

_IV · World_

**Change the story of the world.**
As the old myths collapse, someone writes the new ones. Lead people into the world you built.
The pen that rewrites a childhood memory is the same pen that architects a regenerative civilization.

---
## 05 Proof

_IV · Proof_

### Everyone who committed walked out transformed.
Every person who paid and committed. When we gave it away for free, it didn't work. This runs on belief.

---
## Footer
$0k/wk

_1M views_

**Steve Keen**
The economist who predicted 2008 and was ignored. After one session: $18k from his audience, a million views in a week, and conversations with every major UK party.
0days

_Book, brand, mission_

**Michael Haupt**
Decades studying collapse with no way to make it land. He wrote a 30,000-word book in 28 days and launched a new brand. Hundreds of views became thousands.
5yrs → 3hrs

_A planetary breakthrough_

**Gareth Thompson**
A doctor who saw the system itself was sick. After one conversation he slept ten hours and woke having solved the problem that beat him for five years.
→ policy

_Homeless to fulfillionaire_

**J Friday**
Homeless, with a dream of community wealth no one would hear. Once she took the pen she went viral, shifted Scottish government policy, and became a top voice on Substack.

---
## 06 Journey Map

_V · The Map_

### Four initiations. Each one earns the next.
Behind every threshold is the gold. Tap any stop, or walk it in order.

---
## 07 Arc I

_Arc I · Write_

### OriginStory
Write the book of your life.

---
## Footer
A seven-day initiation into the seven arts of storytelling. Your brain has been writing your life on autopilot and never once asked permission. Here you read that book for the first time, meet the author, and take the pen back.
Rewrite the story and reality follows. That is the science.
It feels like steering a dream. That is the magic.
Seven chapters, each unlocking the next. That is the game.
It opens with Cataleya, runs through seven days of guided initiation, and closes with Zachary. The old story ends and the first chapter of the new one is written. You can feel the shift in hours.

_What you carry out_

**Your Origin Story**
Excavated chapter by chapter and reflected back, so you can read it for the first time.

**The Embodied Mission Blueprint**
Your core values and the foundation of your story, made structural.

**Your VoiceSeed**
Your voice encoded, so AI finally speaks in your real values and your real voice.
Autopilot
You take the pen.
Your past
Becomes your origin.
Your voice
Finally sounds like you.
The story was always there. Now you can see it.

---
## 08 Arc II

_Arc II · Forge_

### Metamyth
Forge the myth of your future.

---
## Footer
The story system you cracked open in your brain also runs civilization. The Metamyth turns the mythic pattern of your life into a story big enough to change the world.
Your hardest struggles become the tension that pulls people into a future they can taste, and fund. Each session trains your Story Intelligence into the system that runs your brand, content, offer and life.
With the Sword Protocol we forge an offer sharp enough to cut to the heart of your solution, one that scales from personal to planetary.

_What we build together_

**The Metamyth Source Manuscript**
The full epic of your life, forged into the future that becomes inevitable once you live it.

**The Sword Protocol**
Your transformation packaged as the journey others pay to walk.

**A fundable vision**
The narrative that makes investors lean in, and the economics to back it.

**Your Story System**
An AI trained on your whole journey, voice and values. Always in context.

**Lifetime access**
To future Metamyth technology and community, because you were here first.
Scarcity
Revealed as a myth.
Selling
Becomes serving.
Your struggle
Becomes the strategy.
Everything is one story away. Now you hold the pen.

---
## 09 Arc III

_Arc III · Play_

### MythOS
Turn business into a game that spreads itself.

---
## Footer
You ended the old story and traveled to the future. Now others need to play with you, and the purpose needs to pay. Your business is a story too. Once you see that, you stop grinding and start playing.
Consumers become customers become co-creators, in a co-op game that gets easier the more people play. Brands that spread like movements without ads. Capital that flows through a living ecosystem.
Organizations that grow the way forests grow. Purpose-driven easiness.

_What goes live_

**A living content system**
Systematic storytelling in your voice on every platform.

**A self-spreading offer**
The transformation is the marketing. The story carries itself.

**Capital that finds you**
The financial narrative that makes you undeniable to the investors who get it.

**A team running the same story**
Everyone pulling one way. Leaders who create leaders.
Grinding
Becomes playing.
Customers
Become co-creators.
Your brand
Spreads like a movement.
A game of purpose that gets easier the more people play it.

---
## 10 Arc IV

_Arc IV · Author_

### StoryLiving
Author reality.

---
## Footer
Follow the thread far enough and you become the story. As the old story collapses, legends are rising to lead the way into another world.
Here you live your vision full-time. We raise your media into cinema, host adventure and ceremony in Colombia, and partner on a launch, a raise or a campaign, sharing in the treasure.
You earned this. Your story is now our story.

_What opens up_

**Cinematic storytelling**
Your story on screen. Documentary, narrative, episodic.

**Adventure & ceremony**
Retreats and residency in the heart of the world, with the elders and the land.

**The Federation**
A planetary network of missions rewriting the source code of the world.
Your vision
You live it full-time.
Your story
Becomes living proof.
Your mission
Joins a federation.
Take on the stories that shape the world.

---
## 11 Fit

_VI · The Fit_

### Who do you have to become to live your story?
This runs on belief. If you're open, it works in hours. If you're performing openness, your excuses will eat you alive.

---
## Footer

_Walk away if_
- You are waiting for the world to change before you do.
- You believe in scarcity more than in the world's need for your solution.
- Shame has you playing a background character in someone else's world.
- You have made money the villain of your story.
- You want change, but you are not ready to be changed.

_But if_
- You know you are here for a reason and you are done pretending otherwise.
- You have a world-size solution that needs building and spreading.
- You won an old game that is killing you, and you are ready for a new one.
- Your own power scares you more than failing does.
- You know another world is possible, and you are crazy enough to make it real.
Then you are exactly who this is for.

---
## 12 Council

_VII · The Council_

### Your guides.
Every one of them made the crossing first. That crossing is their qualification.

_Authorship_

**Zachary Marlow**
Envision your future.
Sees the full pattern of your life where you see chaos, and forges it into the story that runs everything you build. He forged the methodology across a decade and five continents, from nothing.

_Embodiment_

**Cataleya Morgan**
Embody your mission.
Grounds you so deeply in your vision that selling becomes serving and leading becomes ceremony. Big tech and impossible missions, until hundreds of ceremonies with indigenous elders showed her it is us who need to change.

_Kinship_

**The kinship guides**
A whole family around you.
Embodiment · Expression · Heart-centered sales · Capital architecture · Value flow accounting · Leadership. You choose where you need the deepest support, and we match you with the guide who has crossed that territory.

---
## 14 Voices

_VIII · Voices_

### The story speaks for itself.
I feel like I have a new nervous system. The story is real. I am a scientist. I am a doctor. If anyone with an analytical mind is doubting this, stop and listen. This is how it is done.
Gareth Thompson · Doctor
Zachary got me at a moment of despair. Less than four months later I had written the book, launched a paid program, and readers told me a chapter brought them to tears.
Michael Haupt · Author
I am undone. To read my highest purpose, and see how it will manifest, can only be described as fulfillment. Our quest has begun.
Kevin Howard · After his first session

---
## 15 Close

_The Threshold_
If you stopped hiding from your own power,

### what story would you write?
Begin your story →

---
## Footer

---
## Journey map stops
(arc, title, tagline, who/when, description)

- **Arc I · Origin** — excavate your story (Self-guided initiation): A self-guided initiation into the seven arts of storytelling that reprograms your narrative operating system. You meet the author of your life and take the pen back.
- **Arc I · Embodiment** — land it in the body (Session with Cataleya): The new story lands in the body, so the body carries it forward.
- **Arc I · Threshold** — close the old story (Session with Zachary): Cross the threshold and close the old story. You walk out carrying your origin story and your VoiceSeed, in adventure mode, ready for the metamyth.
- **Arc II · Calling** — wound becomes gift (Week one): The Calling turns suffering into assignment. The dragon burning you is burning your people, and your sensitivity to that fire is your qualification to help them through it.
- **Arc II · Quest** — star, tribe, cause, power (Week one): The Quest finds your star, names your tribe, and forges the power you carry.
- **Arc II · Sword Protocol** — forge the methodology (Week one): You walk the Sword Protocol and forge your transformation into a scalable methodology. We workshop it until it cuts.
- **Arc II · Vision** — architect the world (Week two): A future vivid enough that the brain starts building it. Personal to planetary, each scale a natural consequence of the one before.
- **Arc II · Mission** — lay the first brick (Week two): The Mission grounds the vision in ethos and agreements.
- **Arc II · Request** — open the door (Week two): The Request shapes your offer, maps every door into your world, and writes the legend that travels without you.
- **Arc II · Re-source** — ground the source (Week two): The Re-source protocol grounds the source and closes the arc.
- **Arc II · Return** — seven generations forward (Week three): The Return looks seven generations forward.
- **Arc II · The Metamyth** — the story walks on its own (Week three): We craft your metamyth: the full arc from origin to legacy, a story so fully lived it begins to travel on its own. You learn to wield it as pitch, as invitation, as the narrative spine of everything you build.
- **Arc II · Celebration** — integration (Week three): Then we celebrate the crossing.
- **Arc III · The Council** — the council assembles (MythOS): The whole team convenes around your mission. Roles assigned, rhythm established.
- **Arc III · Content System** — your voice on every platform (MythOS): Systematic storytelling running on your voice across every platform.
- **Arc III · Offer Spreads** — the story carries itself (MythOS): The transformation is the marketing. Customers become community, community becomes co-creators spreading the story.
- **Arc III · Capital Flow** — capital that finds you (MythOS): The financial narrative that makes you undeniable to the investors who get it.
- **Arc IV · Cinema** — your story on screen (StoryLiving · by invitation): Your story on screen. Documentary, narrative, episodic.
- **Arc IV · Ceremony** — retreat and residency (StoryLiving · by invitation): Adventure and ceremony retreats in the heart of the world.
- **Arc IV · Federation** — a planetary network (StoryLiving · by invitation): A planetary network of missions rewriting the source code of the world.
- **Arc IV · Partnership** — we share in the treasure (StoryLiving · by invitation): A launch, a raise, a campaign. We partner on outcomes and share in the treasure.
