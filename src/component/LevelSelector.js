import './Level.css';

function LevelSelector({ onSelect }) {

    return (
        <div className="Level">
            <div className="level__one" onClick={() => onSelect(1)}>LEVEL 1</div>
            <div className="level__two" onClick={() => onSelect(2)}>LEVEL 2</div>
        </div>
    );
}

export default LevelSelector;