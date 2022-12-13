export const Book = (sequelize, Sequelize, DataTypes) => {
    return sequelize.define("books", {
        title: {type: DataTypes.STRING},
        description: {type: DataTypes.STRING},
        author: {type: DataTypes.STRING},
        ratings: {type: DataTypes.DOUBLE},
        reviews: {type: DataTypes.INTEGER},
        price: {type: DataTypes.DOUBLE},
        front_page: {type: DataTypes.STRING}
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
};