import { useState, useEffect } from 'react';
import { PersonalData } from '../types/personalData';
import personalDataJson from '../data/personalData.json';

export const usePersonalData = () => {
  const [data, setData] = useState<PersonalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Type assertion since we know the structure matches our interface
      const personalData = personalDataJson as PersonalData;
      setData(personalData);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load personal data:', error);
      setError('Failed to load personal data');
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};

// Individual hooks for specific data sections
export const usePersonalInfo = () => {
  const { data, loading, error } = usePersonalData();
  return {
    personalInfo: data?.personal || null,
    loading,
    error
  };
};

export const useEducation = () => {
  const { data, loading, error } = usePersonalData();
  return {
    education: data?.education || null,
    loading,
    error
  };
};

export const useSkills = () => {
  const { data, loading, error } = usePersonalData();
  return {
    skills: data?.skills || null,
    loading,
    error
  };
};

export const useExperiences = () => {
  const { data, loading, error } = usePersonalData();
  return {
    experiences: data?.experiences || [],
    loading,
    error
  };
};

export const useProjects = () => {
  const { data, loading, error } = usePersonalData();
  return {
    projects: data?.projects || [],
    loading,
    error
  };
};

export const useSocialLinks = () => {
  const { data, loading, error } = usePersonalData();
  return {
    socialLinks: data?.social || null,
    loading,
    error
  };
};
