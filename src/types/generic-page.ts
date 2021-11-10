export type linkModel = {
	heading: string;
	description: string;
	url: string;
}

export interface genericPageModel {
	links: linkModel[];
};
