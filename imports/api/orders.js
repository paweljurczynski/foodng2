/**
 * Created by pawel on 10.05.16.
 */
import { Mongo } from 'meteor/mongo';

const Orders = new Mongo.Collection("orders");

export { Orders }
