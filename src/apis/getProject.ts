import axios from 'axios';

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
		const response = await axios.get<getProjectResponse>(`api/projects`, {
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
			`api/projects/${id}`,
		);
		return response.data;
	} catch (err) {
		console.error(err);
	}
};
