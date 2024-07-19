function PostSkeleton() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} className="flex flex-col gap-3 w-full">
          <div className="h-10 bg-gray-200 w-full rounded-lg" />
          <div className="h-[300px] bg-gray-200 w-full rounded-lg" />
          <div className="h-10 bg-gray-200 w-full rounded-lg" />
        </div>
      ))}
    </>
  );
}

export default PostSkeleton;
