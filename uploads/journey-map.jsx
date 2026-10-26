import { useState } from "react";

const journeyData = [
  {
    arc: "I",
    name: "Originstory",
    verb: "WRITE",
    headline: "Write the book of your life.",
    duration: "30 days",
    color: "#c9a54e",
    steps: [
      { name: "Session with Cattaleya", desc: "Open the space. Find where the old story lives in your body." },
      { name: "The Origin Initiation", desc: "Seven days, seven chapters. A crash course in telling stories across seven mediums that ends the old story and makes you the storyteller." },
      { name: "Session with Zachary", desc: "The full pattern of your life reflected back. Your StorySeed crystallizes." },
    ],
    deliverables: ["Origin Story", "Embodied Mission Blueprint", "VoiceSeed", "7 stories across 7 formats"],
    threshold: "Can you end the old story?",
  },
  {
    arc: "II",
    name: "Metamyth",
    verb: "FORGE",
    headline: "Forge the myth of your future.",
    duration: "2 months",
    color: "#6dbfb8",
    steps: [
      { name: "First Metamyth Session", desc: "Zachary guides you through the ancient pattern of transformation. Your life written all the way into the future." },
      { name: "Sword Protocol", desc: "Craft the scalable repeatable set of steps that turns your transformation into a solution. And gets you paid to do it." },
      { name: "Second Metamyth Session", desc: "Vision, mission, the full arc from where you came from to where you are going, held in one story." },
      { name: "Cattaleya Integration", desc: "Ground the new story in the body so the body carries it forward." },
      { name: "Simon Accountability", desc: "Map the gap. Financial clarity, structural clarity." },
      { name: "Story System Installed", desc: "AI trained on your entire journey, your voice, your values. Co-creating with you from here." },
      { name: "Beginning Ceremony", desc: "Celebration. Mission Map delivered. The first mountain climbed." },
    ],
    deliverables: ["Metamyth Source Manuscript", "Sword Protocol", "Story System", "Mission Map", "Lifetime access"],
    threshold: "Can your transformation serve others?",
  },
  {
    arc: "III",
    name: "MythOS",
    verb: "PLAY",
    headline: "Turn business into the ultimate game.",
    duration: "Ongoing",
    color: "#8bc472",
    steps: [
      { name: "Full Council Assembles", desc: "The whole team convenes around your mission. Roles assigned, rhythm established." },
      { name: "Content System Goes Live", desc: "Systematic storytelling running on your voice across every platform." },
      { name: "Offer Spreading", desc: "The transformation is the marketing. The story carries itself." },
      { name: "Capital Architecture", desc: "The financial narrative that makes you undeniable to the investors who get it." },
      { name: "Team Alignment", desc: "Everyone pulling in one direction. Leaders who create leaders." },
    ],
    deliverables: ["Living content system", "Self-spreading offer", "Capital narrative", "Team running the same story"],
    threshold: "Can the game spread itself?",
  },
  {
    arc: "IV",
    name: "StoryLiving",
    verb: "AUTHOR",
    headline: "Author reality.",
    duration: "By invitation",
    color: "#d4a0d0",
    steps: [
      { name: "Cinematic Storytelling", desc: "Your story on screen. Documentary, narrative, episodic." },
      { name: "Adventure & Ceremony", desc: "Retreats and residency in the heart of the world." },
      { name: "Partnership on Outcomes", desc: "Launches, raises, campaigns. We share in the treasure." },
      { name: "The Federation", desc: "A planetary network of missions rewriting the source code of the world." },
    ],
    deliverables: ["Cinema", "Ceremony", "Federation", "Value-flow partnership"],
    threshold: "Can your story shape the world?",
  },
];

function StepNode({ step, index, color, isLast }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "40px" }}>
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            border: `2px solid ${color}`,
            backgroundColor: expanded ? color : "transparent",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: expanded ? `0 0 12px ${color}40` : "none",
            zIndex: 2,
          }}
          onClick={() => setExpanded(!expanded)}
        />
        {!isLast && (
          <div
            style={{
              width: "1px",
              height: expanded ? "80px" : "50px",
              background: `linear-gradient(to bottom, ${color}60, ${color}10)`,
              transition: "height 0.3s ease",
            }}
          />
        )}
      </div>
      <div
        style={{ flex: 1, cursor: "pointer", paddingBottom: isLast ? "0" : "8px" }}
        onClick={() => setExpanded(!expanded)}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "15px",
            fontWeight: 600,
            color: "#e8e0d0",
            letterSpacing: "0.02em",
            lineHeight: 1.3,
          }}
        >
          {step.name}
        </div>
        <div
          style={{
            maxHeight: expanded ? "100px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s ease, opacity 0.3s ease",
            opacity: expanded ? 1 : 0,
          }}
        >
          <div
            style={{
              fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
              fontSize: "13px",
              color: "#a09880",
              lineHeight: 1.6,
              marginTop: "6px",
            }}
          >
            {step.desc}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArcCard({ data, index }) {
  const [showDeliverables, setShowDeliverables] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div style={{ position: "relative", marginBottom: "0" }}>
      {/* Arc header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: data.color,
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          ARC {data.arc}
        </div>
        <div style={{ flex: 1, height: "1px", background: `linear-gradient(to right, ${data.color}40, transparent)` }} />
      </div>

      {/* Arc name and verb */}
      <div style={{ marginBottom: "6px" }}>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "36px",
            fontWeight: 700,
            color: "#e8e0d0",
            lineHeight: 1.1,
          }}
        >
          {data.name}
        </span>
      </div>

      <div
        style={{
          fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
          fontSize: "11px",
          letterSpacing: "0.25em",
          color: data.color,
          textTransform: "uppercase",
          marginBottom: "4px",
        }}
      >
        {data.verb} · {data.duration}
      </div>

      <div
        style={{
          fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
          fontSize: "18px",
          fontStyle: "italic",
          color: "#c0b898",
          marginBottom: "28px",
          lineHeight: 1.4,
        }}
      >
        {data.headline}
      </div>

      {/* Steps */}
      <div style={{ paddingLeft: "4px", marginBottom: "24px" }}>
        {data.steps.map((step, i) => (
          <StepNode
            key={i}
            step={step}
            index={i}
            color={data.color}
            isLast={i === data.steps.length - 1}
          />
        ))}
      </div>

      {/* Deliverables toggle */}
      <div
        style={{
          cursor: "pointer",
          padding: "12px 16px",
          border: `1px solid ${data.color}25`,
          borderRadius: "8px",
          backgroundColor: `${data.color}08`,
          marginBottom: "16px",
        }}
        onClick={() => setShowDeliverables(!showDeliverables)}
      >
        <div
          style={{
            fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: data.color,
            textTransform: "uppercase",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>What you carry out</span>
          <span style={{ fontSize: "16px", transition: "transform 0.3s", transform: showDeliverables ? "rotate(45deg)" : "rotate(0)" }}>+</span>
        </div>
        <div
          style={{
            maxHeight: showDeliverables ? "200px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s ease",
          }}
        >
          <div style={{ paddingTop: "12px" }}>
            {data.deliverables.map((d, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                  fontSize: "13px",
                  color: "#a09880",
                  padding: "4px 0",
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <span style={{ color: data.color, fontSize: "8px" }}>◆</span>
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Threshold */}
      <div
        style={{
          textAlign: "center",
          padding: "20px 0",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center" }}>
          <div style={{ width: "40px", height: "1px", background: `${data.color}30` }} />
          <div
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "13px",
              fontStyle: "italic",
              color: `${data.color}90`,
              letterSpacing: "0.05em",
            }}
          >
            {data.threshold}
          </div>
          <div style={{ width: "40px", height: "1px", background: `${data.color}30` }} />
        </div>
      </div>
    </div>
  );
}

export default function JourneyMap() {
  return (
    <div
      style={{
        backgroundColor: "#0a1a14",
        minHeight: "100vh",
        padding: "60px 24px",
        maxWidth: "520px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse at 30% 20%, #0f2a1f 0%, #0a1a14 60%, #060e0a 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <div
            style={{
              fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.4em",
              color: "#6dbfb860",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            METAMYTH STORY SYSTEMS
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "42px",
              fontWeight: 700,
              color: "#e8e0d0",
              lineHeight: 1.05,
              margin: "0 0 8px 0",
            }}
          >
            The Journey
          </h1>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "18px",
              fontStyle: "italic",
              color: "#c9a54e",
              lineHeight: 1.4,
            }}
          >
            Each level earns the next.
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            textAlign: "center",
            padding: "24px 16px 40px",
            fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
            fontSize: "13px",
            color: "#a09880",
            lineHeight: 1.7,
            maxWidth: "380px",
            margin: "0 auto",
          }}
        >
          A structured journey with kinship coaches guiding you through every threshold. Tap any step to see what happens there.
        </div>

        {/* Journey path */}
        <div style={{ position: "relative" }}>
          {/* Vertical line connecting everything */}
          <div
            style={{
              position: "absolute",
              left: "24px",
              top: "0",
              bottom: "0",
              width: "1px",
              background: "linear-gradient(to bottom, #c9a54e20, #6dbfb820, #8bc47220, #d4a0d020, transparent)",
              zIndex: 0,
            }}
          />

          {journeyData.map((arc, i) => (
            <ArcCard key={i} data={arc} index={i} />
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "40px 0 20px" }}>
          <div
            style={{
              width: "60px",
              height: "1px",
              background: "linear-gradient(to right, transparent, #c9a54e40, transparent)",
              margin: "0 auto 24px",
            }}
          />
          <div
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "20px",
              fontStyle: "italic",
              color: "#c9a54e",
              lineHeight: 1.4,
              marginBottom: "8px",
            }}
          >
            The future you dream is one story away.
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
              color: "#a0988050",
              textTransform: "uppercase",
            }}
          >
            metamyth.quest
          </div>
        </div>
      </div>
    </div>
  );
}
