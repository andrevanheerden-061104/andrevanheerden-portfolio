/* Light, paper-style version of the Tower of Arithmetic wire flow.
   Each lane is one part of the journey; read left to right.
   Nodes: s = screen, d = decision, n = note/outcome. */

const LANES = [
  {
    name: 'Getting in',
    color: 'yellow',
    nodes: [
      ['s', '01', 'Splash'],
      ['d', '', 'How do they start?'],
      ['s', '02', 'Sign up', 'New player'],
      ['s', '03', 'Log in', 'Has an account'],
      ['s', '04', 'Choose grade', 'Guest or new'],
      ['d', '', 'First time playing?'],
      ['s', 'TS01', 'Tutorial', 'Yes'],
      ['s', '05', 'Home', 'Finish or skip'],
    ],
  },
  {
    name: 'Home & settings',
    color: 'blue',
    nodes: [
      ['s', '05', 'Home'],
      ['s', '06', 'Characters'],
      ['s', '07', 'Profile', 'Badges'],
      ['s', '08', 'Settings', 'Accessibility'],
    ],
  },
  {
    name: 'Spell School',
    color: 'green',
    nodes: [
      ['s', '05', 'Home'],
      ['s', 'L1', 'Lesson intro', 'Learn first'],
      ['s', 'L7', 'Your turn'],
      ['s', 'L8', 'Lesson complete'],
      ['n', '', 'Practise in the tower'],
    ],
  },
  {
    name: 'A fight',
    color: 'orange',
    nodes: [
      ['s', '09', 'Choose dungeon', 'New run'],
      ['s', '12', 'Tower map'],
      ['d', '', 'Which room?'],
      ['s', '10', 'Combat', 'Fight'],
      ['s', '11', 'Cast a spell', 'Pick a spell'],
      ['d', '', 'Right answer?'],
      ['s', '14', 'Hint', 'No: stay on your turn'],
      ['d', '', 'Enemy out of hearts?'],
      ['s', '15', 'Floor reward', 'Yes'],
      ['s', '15b', 'Pick a spell', 'Spell +1'],
      ['n', '', 'Next floor → map'],
    ],
  },
  {
    name: 'Other rooms',
    color: 'pink',
    nodes: [
      ['s', '12', 'Tower map'],
      ['s', '13', 'Puzzle door', 'No hearts lost'],
      ['s', '16', 'Wandering ghost', 'Mystery'],
      ['s', '21', 'Trader'],
      ['s', '22', 'Campfire', 'Rest'],
      ['s', '22b', 'Remove a curse'],
      ['n', '', 'Every room → next floor'],
    ],
  },
  {
    name: 'Boss & climbing on',
    color: 'violet',
    nodes: [
      ['n', '', 'Top floor'],
      ['s', '23', 'Boss room'],
      ['s', '15', 'Boss beaten'],
      ['d', '', 'Climb on?'],
      ['s', '18', 'Run stats', 'No: leave'],
      ['s', '05', 'Home'],
    ],
  },
  {
    name: 'In-run menu',
    color: 'mint',
    nodes: [
      ['n', '', '≡ Any time in a run'],
      ['s', '19', 'Menu drawer'],
      ['s', '20', 'Deck & stash'],
    ],
  },
]

export default function WireFlow() {
  return (
    <div className="wflow-scroll" tabIndex={0} aria-label="Wire flow, scroll sideways to follow each lane">
      <div className="wflow">
        {LANES.map((lane) => (
          <div key={lane.name} className={`wlane wl-${lane.color}`}>
            <p className="wlane-name hand">{lane.name}</p>
            <ol className="wlane-nodes">
              {lane.nodes.map(([type, code, label, edge], i) => (
                <li key={i} className={`wnode wn-${type}`}>
                  {edge && <span className="wedge">{edge}</span>}
                  {type === 's' && <span className="wcode">{code}</span>}
                  <span className="wlabel">{label}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  )
}
