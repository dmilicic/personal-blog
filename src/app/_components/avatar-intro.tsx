type Props = {
  name: string;
  picture: string;
};

const AvatarIntro = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-[200px] h-[200px] border-2 border-secondary rounded-full ml-8 mr-8"
        alt={name}
      />
    </div>
  );
};

export default AvatarIntro;
