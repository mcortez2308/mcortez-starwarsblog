import useGlobalReducer from "../hooks/useGlobalReducer";

export const HCard = ({ favorito }) => {
    const { store } = useGlobalReducer();
    //const { name, uid, favtype, _id } = favorito;
    const { name, uid, favtype, _id } = store.selectedFavorite || favorito || {};

    const sourceCollection = favtype === "people" ? "characters" : favtype;
    const item = store[sourceCollection]?.find(i => i._id === _id || i.uid === uid);
    const properties = item?.properties || {};
    const imageUid = item?.uid ?? uid ?? 1;
    const displayName = properties.name ?? name ?? "No name";

    return (

        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/${favtype}/${imageUid}.jpg`} className="img-fluid rounded-start" alt={displayName} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{displayName}</h5>
                        <p className="paragraph-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus debitis dolor corrupti optio ratione. Non consectetur et, repudiandae adipisci cum, quaerat ratione saepe quia, nulla labore voluptatibus vero reiciendis amet.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between px-3 pb-3">
                    {favtype === "people" && (
                        <>
                            <div className="card-detail">
                                <p className="card-text mb-1">Gender:</p>
                                <p className="card-text mb-1">{properties.gender ?? "No gender"}</p>
                            </div>
                            <div className="card-detail">
                                <p className="card-text mb-1">Hair Color:</p>
                                <p className="card-text mb-1">{properties.hair_color ?? "No hair color"}</p>
                            </div>
                            <div className="card-detail">
                                <p className="card-text mb-3">Eye Color:</p>
                                <p className="card-text mb-3">{properties.eye_color ?? "No eye color"}</p>
                            </div>
                            <div className="card-detail">
                                <p className="card-text mb-3">Birth Year:</p>
                                <p className="card-text mb-3">{properties.birth_year ?? "No birth year"}</p>
                            </div>
                            <div className="card-detail">
                                <p className="card-text mb-3">Height:</p>
                                <p className="card-text mb-3">{properties.height ?? "No height"}</p>
                            </div>
                        </>
                    )}
                    {favtype === "planets" && (
                        <>
                            <div className="card-detail">
                                <p className="card-text mb-1">Population:</p>
                                <p className="card-text mb-1">{properties.population ?? "No population"}</p>
                            </div>
                            <div className="card-detail">
                                <p className="card-text mb-3">Terrain:</p>
                                <p className="card-text mb-3">{properties.terrain ?? "No terrain"}</p>
                            </div>
                            <div className="card-detail">
                                <p className="card-text mb-3">Climate:</p>
                                <p className="card-text mb-3">{properties.climate ?? "No climate"}</p>
                            </div>
                            <div className="card-detail">
                                <p className="card-text mb-3">Orbital Period:</p>
                                <p className="card-text mb-3">{properties.orbital_period ?? "No orbital period"}</p>
                            </div>
                            <div className="card-detail">
                                <p className="card-text mb-3">Diameter:</p>
                                <p className="card-text mb-3">{properties.diameter ?? "No diameter"}</p>
                            </div>
                        </>
                    )}
                    {favtype === "vehicles" && (
                        <>
                            <div className="card-detail">
                                <p className="card-text mb-1">Model:</p>
                                <p className="card-text mb-1">{properties.model ?? "No model"}</p>
                            </div>
                            <div className="card-detail">
                                <p className="card-text mb-3">Vehicle Class:</p>
                                <p className="card-text mb-3">{properties.vehicle_class ?? "No vehicle class"}</p>
                            </div>
                            <div className="card-detail">
                                <p className="card-text mb-3">Passengers:</p>
                                <p className="card-text mb-3">{properties.passengers ?? "No passengers"}</p>
                            </div>
                            <div className="card-detail">
                                <p className="card-text mb-3">Cargo Capacity:</p>
                                <p className="card-text mb-3">{properties.cargo_capacity ?? "No cargo capacity"}</p>
                            </div>
                            <div className="card-detail">
                                <p className="card-text mb-3">Length:</p>
                                <p className="card-text mb-3">{properties.length ?? "No length"}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>

    );
};