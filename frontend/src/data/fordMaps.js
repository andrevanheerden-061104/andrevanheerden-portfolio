/* Ford Relay research maps, rebuilt from the team's Figma file as data.
   Status: g = works / solved · a = friction / partly solved · r = broken / not solved · n = nothing there */

export const journey = {
  scenario: 'A customer’s annual Ford service, from the dashboard warning light to collecting the car.',
  phases: [
    { name: 'Notice the need', action: 'Warning light appears', touch: 'Dashboard light, owner’s memory, service book', thought: 'Is this urgent? How much will this cost?', feeling: 'Worried', mood: 2, owner: 'Customer', opp: 'Explain the warning in plain English; show an estimated cost early' },
    { name: 'Find a dealer', action: 'Opens FordPass, searches nearby dealers, compares reviews', touch: 'FordPass dealer locator', thought: 'Which dealer is closest? Are they any good?', feeling: 'Neutral', mood: 3, owner: 'Customer', opp: 'Show dealer ratings and typical wait times in the app' },
    { name: 'Book', action: 'Picks a service type and time slot, confirms', touch: 'Dealer’s online booking portal', thought: 'I hope that actually went through?', feeling: 'Relieved', mood: 4, owner: 'Customer', opp: 'Instant on-screen confirmation; one-tap add to calendar' },
    { name: 'Wait', action: 'Gets a confirmation email and a reminder', touch: 'Email, SMS, FordPass notifications', thought: 'Did they get my request right?', feeling: 'Calm', mood: 4, owner: 'Dealer systems', opp: null },
    { name: 'Arrive & check in', action: 'Drives in, checks in, talks to the advisor', touch: 'Service desk, advisor’s tablet / DMS', thought: 'Will they do what I asked? How long will this take?', feeling: 'Anxious', mood: 1, owner: 'Service advisor', opp: 'Digital check-in; an upfront wait-time estimate' },
    { name: 'Service, pay & collect', action: 'Waits or leaves, reviews the report, pays, collects', touch: 'Inspection app photos, payment terminal, DMS', thought: 'Are these extra repairs necessary? Was it worth it?', feeling: 'Sceptical', mood: 2, owner: 'Advisor & dealer', opp: 'Photo evidence for every repair; an itemised, jargon-free invoice' },
  ],
}

const STAGES = ['Notices problem', 'Selects dealer', 'Books online', 'Waits & reminded', 'Arrives', 'Checks in', 'Car inspected', 'Hands over keys', 'Car serviced', 'Reviews cost & pays', 'Collects car']

export const blueprints = {
  current: {
    kicker: 'define · how it works today',
    title: 'Current-state service blueprint',
    intro: 'How the service really works today, messy parts included. Only cells worth calling out are coloured: green works well, amber is friction, red is where the service breaks.',
    legend: { g: 'Works well', a: 'Friction', r: 'Failure point' },
    stages: STAGES,
    feelings: [['Worried', 2], ['Neutral', 3], ['Relieved', 4], ['Calm', 4], ['Anxious', 1], ['Anxious', 1], ['Anxious', 1], ['Uncertain', 2], ['Anxious', 1], ['Sceptical', 2], ['Relieved', 4]],
    rows: [
      { label: 'Customer action', cells: ['Checks the warning light, wonders how serious it is', 'Compares nearby dealers and star ratings', 'Picks a service type and time slot', 'Adds it to the calendar, then forgets', 'Drives in and parks', 'Tells the advisor what’s wrong, again', 'Waits nearby while the car is looked over', 'Signs the drop-off form, hands over keys', 'Waits, or leaves and hopes for an update', 'Reviews the cost, asks questions, pays', 'Takes the car and leaves'] },
      { label: 'Touchpoint', cells: [['Dashboard, phone', 'a'], 'FordPass app', 'Online booking site', 'Email / SMS', ['Building & signage', 'r'], 'Advisor at the desk', ['Waiting area, no contact', 'r'], 'Advisor at the desk', ['None during the wait', 'n'], 'Advisor, payment terminal', 'Advisor at the desk'] },
      { label: 'Evidence', cells: ['Warning light, push notification', ['Dealer list with star ratings', 'a'], 'Booking confirmation', 'Confirmation email, reminder', ['Signage, a greeting', 'r'], 'Booking on the advisor’s screen', ['None until much later', 'r'], ['Signed drop-off form', 'a'], ['None until the invoice', 'r'], ['Itemised invoice with photos', 'g'], ['Keys back, final receipt', 'g']] },
      { label: 'Pain point', pain: true, cells: ['No explanation of how urgent it is', 'Ratings don’t say if a dealer suits this issue', 'No proof the slot is actually held', 'No easy way to reschedule', 'No clear signs for parking or check-in', 'Has to re-explain the issue from booking', 'Can’t see what’s found as it happens', 'Signs before the price is confirmed', 'No status updates during the work', 'Full cost explained too late to plan', 'No follow-up if a new issue appears'] },
      { line: 'Line of interaction' },
      { label: 'Frontstage', cells: [['None, automated', 'n'], 'Dealer locator in the app', ['Third-party booking portal', 'a'], ['Automatic reminder', 'a'], ['No staff contact yet', 'r'], ['Advisor checks the customer in', 'g'], ['Walk-around with photos', 'g'], ['Advisor confirms the job, gets a signature', 'a'], ['Updates only if the customer asks', 'r'], ['Advisor explains findings, takes payment', 'a'], ['Advisor explains the work done', 'g']] },
      { line: 'Line of visibility' },
      { label: 'Backstage', cells: [['Car flags the issue to Ford', 'g'], 'Dealer availability synced to Ford', ['Bay and technician reserved', 'a'], 'CRM triggers the reminder', ['—', 'n'], ['Advisor digs up history in the DMS', 'r'], 'Findings logged into the DMS', 'Job card opened, technician assigned', 'DMS prices parts, checks warranty', 'DMS finalises pricing', ['Job closed, history updated', 'g']] },
      { line: 'Line of internal interaction' },
      { label: 'Support systems', cells: ['Ford predictive maintenance data', 'Dealer network agreements', 'Shift & bay-capacity planning', 'Dealer CRM', ['—', 'n'], ['DMS has the data but doesn’t surface it', 'a'], 'Parts inventory, training records', 'Technician roster', 'Parts inventory, labour rates', 'Labour rates, warranty admin', ['Follow-up survey exists, never triggered', 'a']] },
    ],
  },
  future: {
    kicker: 'ideate · the same journey, rewired',
    title: 'Future-state service blueprint',
    intro: 'The same eleven stages on the same infrastructure, but every update is a by-product of work already happening. No new departments, no new DMS: Relay is an integration, not an invasion.',
    legend: { g: 'Solved', a: 'Partly solved', r: 'Not solved' },
    stages: STAGES,
    feelings: [['Reluctant', 2], ['Confident', 4], ['In control', 5], ['Calm', 4], ['Unsure', 3], ['Understood', 4], ['Included', 4], ['Weighing it up', 3], ['Informed', 4], ['No surprises', 5], ['Relieved', 5]],
    rows: [
      { label: 'Customer action', cells: ['Taps the prompt: what’s due and why', 'Compares dealers on wait time, not just distance', 'Sees the price, attaches a photo of the problem', 'Checks the timeline; approves parts ordered ahead', 'Drives in and parks', 'Hands over the keys', 'Reads findings on the phone as they’re logged', 'Approves or declines each line of the quote', 'Gets on with the day, watches the timeline', 'Checks the invoice against what was approved', 'Arrives at the time the app gave'] },
      { label: 'Evidence', cells: ['Service-due card with the likely cost', 'Each dealer’s wait time and next real slot', 'Price before confirming; the slot is held', 'Live timeline, plus a request before parts are ordered', 'Signage and a greeting, as today', 'Job card already open with the concern', 'A photo per finding, in plain English', 'Itemised quote, each line tied to a photo', 'Work, quality check and wash queue', 'Invoice matches the approved quote', 'Ready-for-collection card'] },
      { label: 'How Relay fixes it', pain: true, cells: [['Urgency is clear before anything is booked', 'g'], ['Wait time shows, but not whether a dealer suits this issue', 'a'], ['Confirming reserves the bay and the technician', 'g'], ['Reschedule in the app, no call', 'g'], ['Finding the entrance still depends on signage', 'r'], ['The concern travels with the job', 'g'], ['The job can’t move on until the photos exist', 'g'], ['The price is agreed before work starts', 'g'], ['Every status comes from something physical', 'g'], ['Payment is confirmation, not a reveal', 'g'], ['Collection fires the follow-up', 'g']] },
      { line: 'Line of interaction' },
      { label: 'Frontstage', cells: ['Automatic service-due prompt', 'Dealer list with live wait times', 'Priced booking that holds the slot', 'Live timeline, part pre-order request', 'Signage and parking, unchanged', 'Advisor greets with the job card filled in', 'Findings arrive on the phone', 'Quote approved on the phone', 'Timeline: work, QC, wash queue', 'Advisor takes a known amount', 'Keys handed over, nothing new to explain'] },
      { line: 'Line of visibility' },
      { label: 'Backstage', cells: ['Car data and history are read', 'Each dealer publishes live bay & wash capacity', 'Bay and technician reserved on the shared job', 'Parts pre-ordered once the customer agrees', 'Job appears on the live floor view', 'Intake photos and signature open the job', 'Technician clocks on, logs findings', 'Job waits on the customer, then parts', 'Work, QC, wash queue and wash fire from events', 'Invoice generated from the approved quote', 'Job closes, photos kept with the car'] },
      { line: 'Line of internal interaction' },
      { label: 'Support systems', cells: ['Ford maintenance pipeline, history', 'Capacity feed from each console', 'Shared job record across DMS, parts, warranty', 'Parts inventory, pre-ordering', 'Live bay & wash capacity model', 'DMS history, evidence store', 'Bay photo capture, required-shot checklist', 'Labour rates, warranty admin', 'Wash capacity model, exceptions board', 'Payment terminal, DMS pricing', 'Follow-up triggered by the collected event'] },
    ],
  },
}
