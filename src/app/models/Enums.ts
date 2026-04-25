export enum RecipientType {
  Email = 1,
  Phone = 2,
  // add more if needed
}

export enum Technology {
  HTML = 'html',
  CSS = 'css',
  JavaScript = 'js',
  TypeScript = 'ts',
  Python = 'python',
  DotNet = 'dotnet',
  CSharp = 'csharp',
  Fullstack = 'fullstack'
}

export enum Technologies {
  Html = 0,
  Css = 1,
  JavaScript = 2,
  TypeScript = 3,
  CSharp = 4,
  Java = 5,
  Python = 6,
  PHP = 7,
  DOTNET = 8,
  React = 9,
  Angular = 10,
  Vue = 11,
  NodeJS = 12,
  CLanguage = 13,
}

export enum Status{
  Published = 0,
  Draft = 1,
}

export enum DifficultyLevel {
  Easy = 0,
  Medium = 1,
  Hard = 2
}

export enum CodingQuestionCategory {
  Array = 0,
  String = 1,
  HashMap = 2,
  LinkedList = 3,
  Stack = 4,
  Queue = 5,
  BinaryTree = 6,
  Graph = 7,
  Recursion = 8,
  DynamicProgramming = 9,
  Greedy = 10,
  TwoPointers = 11,
  SlidingWindow = 12,
  Sorting = 13,
  Searching = 14,
  BitManipulation = 15,
  Math = 16,
  Backtracking = 17
}

export const difficultyMap = {
  [DifficultyLevel.Easy]: {
    label: 'Easy',
    class: 'bg-green-900/40 text-green-400 border border-green-700/50'
  },
  [DifficultyLevel.Medium]: {
    label: 'Medium',
    class: 'bg-yellow-900/40 text-yellow-400 border border-yellow-700/50'
  },
  [DifficultyLevel.Hard]: {
    label: 'Hard',
    class: 'bg-red-900/40 text-red-400 border border-red-700/50'
  },
};


export const categoryMap = {
  [CodingQuestionCategory.Array]: { label: 'Array' },
  [CodingQuestionCategory.String]: { label: 'String' },
  [CodingQuestionCategory.HashMap]: { label: 'HashMap' },
  [CodingQuestionCategory.LinkedList]: { label: 'Linked List' },
  [CodingQuestionCategory.Stack]: { label: 'Stack' },
  [CodingQuestionCategory.Queue]: { label: 'Queue' },
  [CodingQuestionCategory.BinaryTree]: { label: 'Binary Tree' },
  [CodingQuestionCategory.Graph]: { label: 'Graph' },
  [CodingQuestionCategory.Recursion]: { label: 'Recursion' },
  [CodingQuestionCategory.DynamicProgramming]: { label: 'Dynamic Programming' },
  [CodingQuestionCategory.Greedy]: { label: 'Greedy' },
  [CodingQuestionCategory.TwoPointers]: { label: 'Two Pointers' },
  [CodingQuestionCategory.SlidingWindow]: { label: 'Sliding Window' },
  [CodingQuestionCategory.Sorting]: { label: 'Sorting' },
  [CodingQuestionCategory.Searching]: { label: 'Searching' },
  [CodingQuestionCategory.BitManipulation]: { label: 'Bit Manipulation' },
  [CodingQuestionCategory.Math]: { label: 'Math' },
  [CodingQuestionCategory.Backtracking]: { label: 'Backtracking' },
};


export const TechnologyDescriptions: Record<string, string> = {
  [Technology.HTML]: 'Learn the building blocks of the web - HTML.',
  [Technology.CSS]: 'Master styling with modern CSS.',
  [Technology.JavaScript]: 'Become proficient in JavaScript coding.',
  [Technology.TypeScript]: 'Level up your skills with TypeScript.',
  [Technology.Python]: 'Explore Python programming.',
  [Technology.DotNet]: '.NET framework development.',
  [Technology.CSharp]: 'Deep dive into C# language.',
  [Technology.Fullstack]: 'Build complete web apps from frontend to backend.'
};


export enum TabType {
  Description = 'DESCRIPTION',
  Editor = 'EDITOR',
  Solution = 'SOLUTION',
};

export enum ComparisonType
{
  None = 0,
  Exact = 1,
  UnorderedList = 2,
  UnorderedListOfLists = 3,
  FloatTolerance = 4,
  MultipleOutputs = 5,
  CustomValidator = 6,
}

