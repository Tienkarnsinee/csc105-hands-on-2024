import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  number: z.number().min(1, "Must be at least 1").max(100, "Max is 100"),
  q: z.enum(["love", "like"], { message: "Select either 'love' or 'like'" }),
  size: z.enum(["small", "medium", "large"], { message: "Select a valid size" }),
});

function FavouritesPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    navigate(`/fav/${data.number}?q=${data.q}&size=${data.size}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
        <h2 className="text-2xl font-semibold text-center mb-4">Favourites Page</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium">Number:</label>
            <input
              type="number"
              {...register("number", { valueAsNumber: true })}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.number && (
              <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Q:</label>
            <select
              {...register("q")}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="love">Love</option>
              <option value="like">Like</option>
            </select>
            {errors.q && (
              <p className="text-red-500 text-sm mt-1">{errors.q.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Size:</label>
            <select
              {...register("size")}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {errors.size && (
              <p className="text-red-500 text-sm mt-1">{errors.size.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FavouritesPage;
