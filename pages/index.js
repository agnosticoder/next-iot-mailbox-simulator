import Hello from '../components/Mailbox';

export default function Home() {
    return (
        <div>
            <div className="header">
                <h1>IOT Mailbox Simulator</h1>
            </div>
            <div className="container">
                <Hello />
            </div>
        </div>
    );
}
