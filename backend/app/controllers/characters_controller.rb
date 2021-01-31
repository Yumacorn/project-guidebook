class CharactersController < ApplicationController

    before_action :set_universe
    def index
        @characters = @universe.characters
        render json: @characters
    end

    def create
        @character = @universe.characters.new(character_params)
        if @character.save
            render json: @character
        else
            render json: {error_message: "Failed to create character"}
        end
    end

    def update
        @universe = Universe.find(params[:id])
        binding.pry
        render json: @universe
    end

    def show
        @character = Character.find(params[:id])
        render json: @character        
    end
    
    def destroy
        @character = Character.find(params[:id])
        @character.destroy
    end

    private

    def set_universe 
        @universe = Universe.find(params[:universe_id])
    end

    def character_params
        params.require(:character).permit(:name, :type_of, :universe_id, :description)
    end
end
