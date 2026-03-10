import { Navigate, useLocation } from "react-router-dom";
import { HCard } from "../components/HCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const HCardPage = () => {
	const { state } = useLocation();
	const { store } = useGlobalReducer();

	const favorito = state?.favorito ?? store.selectedFavorite;

	if (!favorito) {
		return <Navigate to="/" replace />;
	}

	return (
		<div className="container py-4 d-flex justify-content-center">
			<HCard favorito={favorito} />
		</div>
	);
};
