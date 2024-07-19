function Trending() {
  return (
    <div className="flex flex-col gap-4 py-2">
      <div className="flex items-center gap-2 bg-gray-50/80 p-4 rounded-xl">
        <div>
          <div className="w-[50px]">
            <img
              src="https://cdn-icons-png.freepik.com/256/7694/7694085.png"
              alt=""
              width={50}
            />
          </div>
        </div>
        <div>
          <p className="text-gray-700 text-sm">
            <span className="text-primary">Charlie Lane Smith</span> and{" "}
            <span className="text-primary">4</span> of your friends have their
            birthdays today!
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-gray-50/80 p-4 rounded-xl">
        <div className="flex items-center gap-2">
          <div>
            <div>
              <img
                src="https://www.svgrepo.com/show/387356/delivery.svg"
                alt=""
                width={35}
              />
            </div>
          </div>
          <div className="flex flex-col text-sm">
            <span>Fastest in delivering your pizza!</span>
            <span className="text-primary underline cursor-pointer">
              <a href="https://deliverino.vercel.app" target="_blank">
                https://deliverino.vercel.app
              </a>
            </span>
          </div>
        </div>
        <div>
          <img
            src="https://yum.co.ke/static/img/pizza_image.jpg?5a325bf0aea3"
            alt=""
            className="h-[220px] w-full object-cover rounded-lg shadow-sm"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-gray-50/80 p-4 rounded-xl">
        <span className="uppercase text-xs text-gray-500">latest news</span>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div>
              <div className="w-[40px]">
                <img
                  src="https://images.pexels.com/photos/918328/pexels-photo-918328.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-[40px] h-[40px] object-cover rounded-full"
                />
              </div>
            </div>
            <span className="text-sm line-clamp-2">
              New Study Finds Eating Chocolate Reduces Stress Levels: Indulge
              Away!
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <div className="w-[40px]">
                <img
                  src="https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-[40px] h-[40px] object-cover rounded-full"
                />
              </div>
            </div>
            <span className="text-sm line-clamp-2">
              Alien Invasion Predicted by NASA: Are We Ready for
              Extraterrestrial Visitors?
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <div className="w-[40px]">
                <img
                  src="https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-[40px] h-[40px] object-cover rounded-full"
                />
              </div>
            </div>
            <span className="text-sm line-clamp-2">
              Breaking News: Bigfoot Spotted Roaming the Forests of Montana
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <div className="w-[40px]">
                <img
                  src="https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-[40px] h-[40px] object-cover rounded-full"
                />
              </div>
            </div>
            <span className="text-sm line-clamp-2">
              New Study Reveals Eating Ice Cream for Breakfast Improves Brain
              Function
            </span>
          </div>
          <div className="text-sm bg-gray-300 rounded-lg text-center py-1.5 cursor-pointer">
            <span>Show More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
