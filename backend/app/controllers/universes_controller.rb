class UniversesController < ApplicationController

    def index
        @universes = Universe.all
        serialized_data = UniverseSerializer.new(@universes)
        render json: serialized_data
        # render json: @universes
    end

    def create
        @universe = Universe.new(universe_params)
        if @universe.save
            # render json: @universe
            serialized_data = UniverseSerializer.new(@universe)
            render json: serialized_data
        else
            render json: {error_message: "Failed to create universe"}
        end
    end

    def update
        @universe = Universe.find(params[:id])
        binding.pry
        serialized_data = UniverseSerializer.new(@universe)
        render json: serialized_data
        # render json: @universe
    end

    def show
        @universe = Universe.find(params[:id])
        # render json: @universe
        serialized_data = UniverseSerializer.new(@universe)
        render json: serialized_data
    end

    def destroy
        @universe = Universe.find(params[:id])
        @universe.destroy
    end

    private

    def universe_params
        params.require(:universe).permit(:name, :type_of)
    end
end
