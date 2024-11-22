type Props = {
  tag: String;
};

const Tag = ({ tag }: Props) => {
  return (
    <div className="bg-secondary text-white rounded-full p-2 text-sm">
      {tag}
    </div>
  );
};

export default Tag;
