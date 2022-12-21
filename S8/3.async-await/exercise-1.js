const runTimeOut = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Time out!');
  };
  
  runTimeOut();  