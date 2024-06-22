const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: "https://swapi.dev/api",
			people: [],
			planets: [],
			favorites: [],
		},
		actions: {
			getInfoPeople: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${store.apiUrl}/people`)
					if (!response.ok) {
						throw new Error("there has been an error");
					}
					const data = await response.json();
					setStore({ people: data.results })
				} catch (error) {
					console.log(error);
				}
			},

			getInfoPlanets: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${store.apiUrl}/planets`)
					if (!response.ok) {
						throw new Error("there has been an error");
					}
					const data = await response.json();
					setStore({planets: data.results})
				} catch (error) {
					console.log(error);
				}
			},

			addFavorites: (id, name) => {
				const store = getStore();
				console.log(id,name)
				setStore({favorites:[...store.favorites, {id,name}]})
			},

			deleteFavorite: (result) => {
				const store = getStore();
				const remove = store.favorites.filter((favorite) => favorite.name !== result.name)
				setStore({favorites:remove})
			}
		}
	};
};

export default getState;
