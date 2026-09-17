import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

export interface Project {
  id: string;
  title: string;
  description: string;
  budget?: string;
  timeline?: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  status: 'pending' | 'approved' | 'rejected';
  aiFeedback?: string;
  createdAt: string;
}

export async function getProjects(): Promise<Project[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function saveProject(project: Project): Promise<void> {
  const projects = await getProjects();
  projects.push(project);
  await fs.writeFile(DATA_FILE, JSON.stringify(projects, null, 2));
}

export async function getApprovedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((p) => p.status === 'approved');
}