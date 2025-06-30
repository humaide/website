import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import Heading from '../components/Heading';

// Frageblöcke und Texte
const questions = {
  block1: [
    'Das Ergebnis ist ein zentraler Bestandteil meiner Arbeit.',
    'Ein solches Ergebnis muss ich häufig erzeugen.',
    'Bei dem Ergebnis ist Präzision unwichtig und Abweichung nicht schädlich.',
    'Das Ergebnis zu erstellen kostet mir viel Zeit.',
    'Ein falsches Ergebnis muss nicht aufwendig korrigiert werden.',
  ],
  block2: [
    'Das KI-System und ich können unterschiedliche Daten nutzen.',
    'Das KI-System kontrollieren geht besser, als es selbst zu machen.',
    'Ich habe keine Sorge, dass das KI-System relevante Daten verschluckt.',
    'Das KI-System wird teilweise mit unvollständigen Daten arbeiten.',
    'Das KI-System muss den Inhalt seiner Aufgabe nicht verstehen können.',
  ],
  block3: [
    'Das KI-System könnte verhindern, dass ich Trends bemerke.',
    'Das KI-System könnte meine Persönlichkeit auf der Arbeit hemmen.',
    'Das KI-System könnte meinen Austausch mit anderen einschränken.',
    'Das KI-System übernimmt Themen, die mit meinen Werten zusammenhängen.',
    'Das KI-System übernimmt Aufgaben, die mir Freude bereiten.',
  ],
};

// Titel für die Blöcke und Instruktionstexte
const blockTitles = {
  block1: 'Nützlichkeit',
  block2: 'Rahmenbedingungen',
  block3: 'Zufriedenheit',
};
const blockInstructions = {
  block1: 'Überlegen Sie, welches Ergebnis ein KI-System erzeugen könnte (z.B. Mail einsortieren, Schaden beschreiben).',
  block2: 'Überlegen Sie, wie Sie und ein KI-System zusammenarbeiten könnten.',
  block3: 'Überlegen Sie, welche ungelösten Probleme es bei dem Einsatz des KI-Systems geben könnte.',
};

// Hover-Nachrichten für negative Empfehlungen
const tooltipMessages = {
  block1: 'Für diese Aufgabe könnte eine KI sich eventuell nicht lohnen. KI lohnt sich bei wiederkehrenden Aufgaben, bei denen es Menschen deutlich mehr Zeit kostet, es selbst zu machen. Solche Aufgaben gibt es in jedem Unternehmen – um die zu identifizieren, kontaktieren Sie uns gerne.',
  block2: 'KI-Systeme benötigen bestimmte Rahmenbedingungen, um effektiv eingesetzt zu werden, z.B. genug Daten. Sie können je nach Technologie auch Risiko in einen Prozess bringen. Daher muss der Prozess genau betrachtet werden. Wir unterstützen Sie gerne dabei.',
  block3: 'Nicht jede Aufgabe, die KI unterstützen kann, muss auch durch KI unterstützt werden. Ersetzt man die falschen Arbeitsschritte, kann das auch die Arbeit erschweren. Wir helfen Ihnen, diese Arbeitsprozesse umzugestalten.',
};

// Empfehlung basierend auf Summe
function getRecommendation(sum, blockIndex) {
  if (blockIndex === 1 || blockIndex === 2) {
    return sum >= 22 ? '✔️ Weiterverfolgen empfohlen' : '⚠️ Eher nicht weiterverfolgen';
  }
  if (blockIndex === 3) {
    return sum <= 14 ? '✔️ Weiterverfolgen empfohlen' : '⚠️ Eher nicht weiterverfolgen';
  }
  return '';
}

export default function KIScoringTool() {
  const [answers, setAnswers] = useState({ block1: {}, block2: {}, block3: {} });

  const handleChange = (blockKey, index, value) => {
    setAnswers(prev => ({
      ...prev,
      [blockKey]: {
        ...prev[blockKey],
        [index]: Number(value)
      }
    }));
  };

  const getSum = blockKey =>
    Object.values(answers[blockKey]).reduce((sum, val) => sum + val, 0);

  const isComplete = blockKey =>
    Object.keys(answers[blockKey]).length === questions[blockKey].length;

  const shouldShowBlock = useMemo(() => {
    const sum1 = getSum('block1');
    const sum2 = getSum('block2');
    return {
      block1: true,
      block2: isComplete('block1') && getRecommendation(sum1, 1).startsWith('✔️'),
      block3: isComplete('block2') && getRecommendation(sum2, 2).startsWith('✔️')
    };
  }, [answers]);

  const resetForm = () => setAnswers({ block1: {}, block2: {}, block3: {} });

  // Basisgrößen
  const BUTTON_SIZE = 40;
  const UNSELECTED_SIZE = 32;

  return (
    <div className='w-full bg-pastel-blue'>
        <div className="p-6 max-w-4xl mx-auto space-y-10 min-h-screen text-charcoal font-sans w-full">
          <Heading postion={"text-left pt-10 lg:pt-20"} color={"text-charcoal"} section="Scoring-tool" title="Handlungsempfehlungen" subtitle="Beantworten Sie die Fragen, um eine automatsierte Ersteinschätzung für den Einsatz von KI im Rahmen eines bestimmten Unternehmensprozesses zu erhalten." />

        {Object.entries(questions).map(([blockKey, qs], bIndex) => {
            const sum = getSum(blockKey);
            const rec = getRecommendation(sum, bIndex + 1);
            return (
            shouldShowBlock[blockKey] && (
                <section key={blockKey} className="bg-pastel-blue p-6 border border-charcoal/20">
                <h2 className="text-2xl font-semibold mb-2 text-soft-blue">
                    {blockTitles[blockKey]}
                </h2>
                <p className="text-sm mb-6 text-charcoal">
                    {blockInstructions[blockKey]}
                </p>

                {/* Fortschrittsbalken */}
                <div className="w-full bg-pastel-blue border border-charcoal/20 h-2 rounded mb-6">
                    <div
                    className="bg-linear-to-r from-soft-blue to-charcoal h-2 rounded transition-all duration-500"
                    style={{ width: `${(Object.keys(answers[blockKey]).length / qs.length) * 100}%` }}
                    />
                </div>

                <ul className="space-y-8">
                    {qs.map((text, idx) => (
                    <li key={idx}>
                        <p className="mb-2 text-lg">{text}</p>

                        {/* Pole Labels und Antwortbuttons */}
                        <div className="flex items-center gap-4 mt-3">
                        <span className="text-sm text-charcoal whitespace-nowrap">
                            1 – stimme gar nicht zu
                        </span>

                        <div className="flex flex-wrap gap-4">
                            {[1,2,3,4,5,6].map(n => {
                            const isSelected = answers[blockKey][idx] === n;
                            const containerStyle = {
                                width: BUTTON_SIZE,
                                height: BUTTON_SIZE,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            };
                            const innerSize = isSelected ? BUTTON_SIZE : UNSELECTED_SIZE;
                            if (isSelected) {
                                return (
                                <div key={n} style={containerStyle}>
                                    <button
                                    type="button"
                                    onClick={() => handleChange(blockKey, idx, n)}
                                    className="rounded-full flex items-center justify-center text-base font-semibold text-charcoal shadow-lg"
                                    style={{
                                        width: innerSize,
                                        height: innerSize,
                                        color: "white",
                                        background: 'linear-gradient(to bottom right, #4D48E2, #4D48E2)',
                                        transform: 'scale(1.05)',
                                        transition: 'transform 0.2s'
                                    }}
                                    >
                                    {n}
                                    </button>
                                </div>
                                );
                            } else {
                                return (
                                <div key={n} style={containerStyle}>
                                    <button
                                    type="button"
                                    onClick={() => handleChange(blockKey, idx, n)}
                                    className="rounded-full flex items-center justify-center text-base font-semibold text-charcoal transition-transform hover:scale-105"
                                    style={{
                                        width: innerSize,
                                        height: innerSize,
                                        background: 'transparent',
                                        border: '2px solid transparent',
                                        borderRadius: '9999px',
                                        borderImageSlice: 1,
                                        borderImageSource: 'linear-gradient(to right, #4D48E2, #4D48E2)'
                                    }}
                                    >
                                    {n}
                                    </button>
                                </div>
                                );
                            }
                            })}
                        </div>

                        <span className="text-sm text-charcoal whitespace-nowrap">
                            6 – stimme vollkommen zu
                        </span>
                        </div>
                    </li>
                    ))}
                </ul>

                {/* Empfehlung mit Tooltip */}
                {isComplete(blockKey) && (
                    <div className="mt-8 text-xl font-medium flex items-center space-x-2">
                    <span>Summe: {sum} – <span className="text-soft-blue">{rec}</span></span>
                    {rec.startsWith('⚠️') && (
                        <div className="relative inline-block">
                        <span className="peer bg-linear-to-br from-pastel-blue to-soft-blue text-charcoal w-5 h-5 flex items-center justify-center rounded-full cursor-pointer select-none">
                            ?
                        </span>
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none bg-linear-to-r from-pastel-blue to-soft-blue text-white text-sm rounded p-2 w-64 z-10">
                            {tooltipMessages[blockKey]}
                        </div>
                        </div>
                    )}
                    </div>
                )}
                </section>
            )
            );
        })}

        <div className="text-center">
            <button type="button" onClick={resetForm} className="bg-soft-blue text-white px-8 py-3 rounded-full hover:opacity-90 transition text-lg font-medium">
            Zurücksetzen
            </button>
        </div>
        </div>
    </div>
  );
}
