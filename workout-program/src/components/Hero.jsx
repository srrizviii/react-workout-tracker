export default function Hero() {

    return (
        <>
            <h5>Complete this training program if you want to...</h5>
            <ol className="benefits-list">
                <li>Get results fast</li>
                <li>Learn more about the gym, training and technique</li>
                <li>Have a workout program that works without any research of your own</li>
            </ol>
            <h3>The Rules</h3>
            <p>To complete this program, you <b>MUST</b> follow these 3 simple rules:</p>
            <ul className="rules-list">
                <div className="rule-item">
                    <p><b>Rest</b></p>
                    <p>Rest is very important for your muscles to recover from intense lifting sessions! Without proper rest injury becomes much more probable.</p>
                </div>
                <div className="rule-item">
                    <p><b>Reps</b></p>
                    <p>Repetitions must be clean. Do not utilize momentum! Try to keep the rep slow and controlled. If that's not possible the weight is too much.</p>
                </div>
                <div className="rule-item">
                    <p><b>Weight</b></p>
                    <p>Select the weight so that you can complete 8-10 reps without reaching complete failure.</p>
                </div>
            </ul>
            <h3>The Training Plan</h3>
            <p>The training plan follows the popular PPL split which follows as:</p>
            <p><b><i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i></b></p>
        </>
    )
}