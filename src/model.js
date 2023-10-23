import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    return `${this.fname} ${this.lname}`
  }
}

Human.init(
  {
    human_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fname: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    lname: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    email: {
      type: DataTypes.VARCHAR,
      allowNull: false
    }
  },
  {
    modelName: 'Human',
    sequelize: db
  }
)

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Animal.init(
  {
    animal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    species: {
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    birth_year: {
      type: DataTypes.INTEGER
    }
  },
  {
    modelName: 'Animal',
    sequelize: db
  }
)

Human.hasMany(Animal, { foreignKey: 'human_id' })
Animal.belongsTo(Human, { foreignKey: 'human_id' })

export default db;
