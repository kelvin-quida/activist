export enum Topic {
  JUSTICE = "justice",
  ACTIVISM = "activism",
  EDUCATION = "education",
  ENVIRONMENT = "environment",
}

export interface TopicsTag {
  label: string;
  icon: string;
  value: Topic;
}

export const GLOBAL_TOPICS: TopicsTag[] = [
  {
    icon: "material-symbols:volunteer-activism",
    value: Topic.ACTIVISM,
    label: `_global.topics.${Topic.ACTIVISM}`,
  },
  {
    icon: "mdi:justice",
    value: Topic.JUSTICE,
    label: `_global.topics.${Topic.JUSTICE}`,
  },
  {
    icon: "mdi:environment",
    value: Topic.ENVIRONMENT,
    label: `_global.topics.${Topic.ENVIRONMENT}`,
  },
  {
    icon: "bi:book",
    value: Topic.EDUCATION,
    label: `_global.topics.${Topic.EDUCATION}`,
  },
];
