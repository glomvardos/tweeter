import { ChildrenTypes } from "../../../../interfaces/children";

function Container({ children }: ChildrenTypes) {
  return (
    <section className="flex h-full p-5 py-7">
      <div className="flex flex-col m-auto w-full items-center justify-center gap-6">
        {children}
      </div>
    </section>
  );
}

export default Container;
