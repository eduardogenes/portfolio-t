interface SkillCardProps {
  name: string;
  level: number;
}

export default function SkillCard({ name, level }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-sm dark:shadow-accent-blue/10 hover:shadow-md dark:hover:shadow-accent-blue/20 transition-all duration-300">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-200">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-accent-blue to-accent-purple h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}