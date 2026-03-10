import useGlobalReducer from "../hooks/useGlobalReducer";

export const HCard = ({ favorito }) => {
    const { store } = useGlobalReducer();
    const { name, uid, favtype, _id } = favorito;

    const item = store[favtype + "s"]?.find(i => i._id === _id);
    const properties = item?.properties || {};
    const imageUid = item?.uid ?? uid ?? 1;
    const displayName = properties.name ?? name ?? "No name";

    return (
        <div style={{ flex: "0 0 18rem" }}>
            <div className="card h-100" style={{ width: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/${favtype}s/${imageUid}.jpg`} className="card-img-top" alt={displayName} />
                <div className="card-body text-start">
                    <h5 className="card-title mb-1">{displayName}</h5>
                    {favtype === "character" && (
                        <>
                            <p className="card-text mb-1">Gender: {properties.gender ?? "No gender"}</p>
                            <p className="card-text mb-1">Hair Color: {properties.hair_color ?? "No hair color"}</p>
                            <p className="card-text mb-3">Eye Color: {properties.eye_color ?? "No eye color"}</p>
                        </>
                    )}
                    {favtype === "planet" && (
                        <>
                            <p className="card-text mb-1">Population: {properties.population ?? "No population"}</p>
                            <p className="card-text mb-3">Terrain: {properties.terrain ?? "No terrain"}</p>
                        </>
                    )}
                    {favtype === "vehicle" && (
                        <>
                            <p className="card-text mb-1">Model: {properties.model ?? "No model"}</p>
                            <p className="card-text mb-3">Vehicle Class: {properties.vehicle_class ?? "No vehicle class"}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};