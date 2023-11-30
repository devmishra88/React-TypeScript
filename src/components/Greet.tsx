type GreetProps = {
  name: string;
  messageCount?: number; // "?" can be used to assign optional props
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const {messageCount = 0} = props
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `welcome ${props.name}! You have ${messageCount} new messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};
