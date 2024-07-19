function TrendCard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold">Latest of the trends</h1>
      <div className="flex flex-col gap-5 bg-white shadow-sm rounded-xl p-6">
        <div className="flex flex-col gap-1">
          <span className="font-medium">#Minions</span>
          <span className="text-gray-500 text-sm">95.7K Shares</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium">#Avengers</span>
          <span className="text-gray-500 text-sm">200K Shares</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium">#Monkey King</span>
          <span className="text-gray-500 text-sm">123K Shares</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium">#Balenciaga</span>
          <span className="text-gray-500 text-sm">500K Shares</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium">#True Spirit</span>
          <span className="text-gray-500 text-sm">23K Shares</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium">#Black Lives Matter</span>
          <span className="text-gray-500 text-sm">1.5M Shares</span>
        </div>
      </div>
      <div className="flex gap-2 items-center whitespace-nowrap flex-wrap text-gray-500 text-sm">
        <span>Privacy Terms.</span>
        <span>Rules and regulations.</span>
        <span className="text-sm text-gray-400 mt-1">
          &copy; All rights reserved
        </span>
      </div>
    </div>
  );
}

export default TrendCard;
