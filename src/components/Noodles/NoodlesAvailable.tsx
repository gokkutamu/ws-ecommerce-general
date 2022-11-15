// Import common & modules.
import Card from "../Common/Card";
import NoodleItem from "./NoodleItem/NoodleItem";

// Import style.
import "./noodles.css";

const DUMMY_NOODLES = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

const NoodlesAvailable = () => {
    const noodlesList = (
        <ul>
            {DUMMY_NOODLES.map((noodle) => (
                <NoodleItem key={noodle.id} item={noodle} />
            ))}
        </ul>
    );

    return (
        <section className="noodles">
            <Card>{noodlesList}</Card>
        </section>
    );
};

export default NoodlesAvailable;