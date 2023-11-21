import { signInInWithGoogle } from '../../firebase/firebase';

const LoginPage = () => {
  const handleOnclick = async () => {
    await signInInWithGoogle();
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[url('/img/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-white bg-opacity-50 rounded text-center w-[25rem] py-l-size px-m-size">
        <h1 className="mb-m-size leading-none font-bold">Expensify</h1>
        <p>it&apos;s time to get</p>
        <button className="btt text-white" onClick={handleOnclick}>
          Login with Google
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
