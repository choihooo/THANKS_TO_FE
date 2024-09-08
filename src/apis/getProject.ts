import axios from 'axios';

const url = import.meta.env.VITE_PROXY_URL;

export interface Project {
	title: string;
	thumbnail: string;
	project_id: number;
}

export interface getProjectResponse {
	projects: Project[];
}

export const getProject = async (type: string) => {
	try {
		const response = await axios.get<getProjectResponse>(`${url}/projects`, {
			params: {
				type: type,
			},
		});
		return response.data.projects;
	} catch (err) {
		console.error(err);
	}
};

export interface getProjectDetailResponse {
	title: string;
	content: string;
}

export const getProjectDetail = async (id: number) => {
	try {
		const response = await axios.get<getProjectDetailResponse>(
			`${url}/projects/${id}`,
		);
		return response.data;
	} catch (err) {
		console.error(err);
	}
};
