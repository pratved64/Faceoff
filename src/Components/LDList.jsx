import LDRow from "./LDRow"

// elements is an array of element object
// element contains Rank, Name and Image path of each celebrity
// Structure element while fetching accordingly

function LDList() {
    function getElements() {
        // Fetch Data here
        
        let arr = []
        for (let i = 4; i <= 10; i++) {
            let o = { rank: i, name: "Margot Robbie", img: "#" }
            arr.push(o)
        }
        return arr;
    }

    let elements = getElements();

    return (
        <div>
            {elements.map((element, index) => (
                <LDRow key={index} {...element} />
            ))}
        </div>
    );
}

export default LDList;

// TODO: Styling for LDRow