import { useState, useEffect } from 'react';

interface UseMediaQuery {
	(query: string): boolean;
}

export const useMediaQuery: UseMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => {
			setMatches(media.matches);
		};
		media.addListener(listener);
		return () => media.removeListener(listener);
	}, [matches, query]);

	return matches;
};

export const useIsSmall = () => {
	return useMediaQuery(
		`(min-width: 0px) and (max-width: 767px)`
	);
};

export const useIsMediumOrLarger = () => {
	return useMediaQuery(`(min-width: 1024px)`);
};
