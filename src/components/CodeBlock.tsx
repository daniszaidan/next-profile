type Props = {
  code: string;
};

export default function CodeBlock({ code }: Props) {
  return (
    <pre className="bg-gray-100 text-sm p-3 rounded-2xl overflow-x-auto">
      <code>{code}</code>
    </pre>
  );
}
