import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { HCard } from "../components/HCard";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	// Use data from the store when available; fallback keeps the UI visible while wiring APIs.
	const characters = Array.isArray(store?.characters) && store.characters.length
		? store.characters
		: [];

	const planets = Array.isArray(store?.planets) && store.planets.length
		? store.planets
		: [];

    function addToFavorites(item, favtype) {
		console.log("Adding to favorites:", item);
		let favorito = {
			name: item.properties?.name ?? "No name",			
			uid: item.properties?.uid ?? "Unknown uid",
			_id: item._id ?? "Unknown _id",
			favtype: favtype
		};
		console.log("Favorite item:", favorito);		
		dispatch({ type: 'ADD_FAVORITE', payload: favorito });
	}

	const renderGridcharacters = () => (
		<div
			className="d-flex gap-3 pb-2"
			style={{ overflowX: "auto", overflowY: "hidden", flexWrap: "nowrap" }}
		>
			{store.characters.map((item, index) => (
				<div key={item.uid ?? index} style={{ flex: "0 0 18rem" }}>
					<div className="card h-100" style={{ width: "18rem" }}>
						<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${item.uid ?? 1}.jpg`} className="card-img-top" alt={item.properties?.name ?? "Card image"} />
						<div className="card-body text-start">
							<h5 className="card-title mb-1">{item.properties?.name ?? "No name"}</h5>
							<p className="card-text mb-1">Gender: {item.properties?.gender ?? "No gender"}</p>
							<p className="card-text mb-1">Hair Color: {item.properties?.hair_color ?? "No hair color"}</p>
							<p className="card-text mb-3">Eye Color: {item.properties?.eye_color ?? "No eye color"}</p>
							<div className="d-flex justify-content-between">
								<a href="#" className="btn btn-primary">Learn more!</a>
								<button className="favbutton btn btn-secondary" onClick={() => addToFavorites(item, "character")}><i className="fa-solid fa-heart"></i></button>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);

	const renderGridplanets = () => (
		<div
			className="d-flex gap-3 pb-2"
			style={{ overflowX: "auto", overflowY: "hidden", flexWrap: "nowrap" }}
		>
			{store.planets.map((item, index) => (
				<div key={item.uid ?? index} style={{ flex: "0 0 18rem" }}>
					<div className="card h-100" style={{ width: "18rem" }}>
						<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${item.uid ?? 1}.jpg`} className="card-img-top" alt={item.properties.name ?? "Card image"} />
						<div className="card-body text-start">
							<h5 className="card-title mb-1">{item.properties.name ?? "No name"}</h5>
							<p className="card-text mb-1">Population: {item.properties.population ?? "No population"}</p>
							<p className="card-text mb-3">Terrain: {item.properties.terrain ?? "No terrain"}</p>
							<div className="d-flex justify-content-between">
								<a href="#" className="btn btn-primary">Learn more!</a>
								<button className="favbutton btn btn-secondary" onClick={() => addToFavorites(item, "planet")}><i className="fa-solid fa-heart"></i></button>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);

	const renderGridVehicles = () => (
		<div className="d-flex gap-3 pb-2" style={{ overflowX: "auto", overflowY: "hidden", flexWrap: "nowrap" }}>
			{store.vehicles.map((item, index) => (
				<div key={item.uid ?? index} style={{ flex: "0 0 18rem" }}>
					<div className="card h-100" style={{ width: "18rem" }}>
						<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/vehicles/${item.uid ?? 1}.jpg`} className="card-img-top" alt={item.properties.name ?? "Card image"} />
						<div className="card-body text-start">
							<h5 className="card-title mb-1">{item.properties.name ?? "No name"}</h5>
							<p className="card-text mb-1">Model: {item.properties.model ?? "No model"}</p>
							<p className="card-text mb-3">Vehicle Class: {item.properties.vehicle_class ?? "No vehicle class"}</p>
							<div className="d-flex justify-content-between">
								<a href="#" className="btn btn-primary">Learn more!</a>
								<button className="favbutton btn btn-secondary" onClick={() => addToFavorites(item, "vehicle")}><i className="fa-solid fa-heart"></i></button>
							</div>
						</div>
					</div>
				</div>
			))}	
		</div>
	);

	return (
		<div className="text-center mt-5">
			{store.selectedFavorite && (
				<div className="container mb-4 d-flex justify-content-center">
					<HCard favorito={store.selectedFavorite} />
				</div>
			)}
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							Characters
						</button>
					</h2>
					<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							{renderGridcharacters()}
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							Planets
						</button>
					</h2>
					<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							{renderGridplanets()}
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							Vehicles
						</button>
					</h2>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							{renderGridVehicles()}
						</div>
					</div>
				</div>				
			</div>
		</div>
	);
}; 