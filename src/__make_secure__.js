/**
 * ---------------------------------
 *        SECURITY BASIC LAYER
 * ---------------------------------
 * 1. don't show the link to them who should see it only show to the person/types of user who should see it
 * 2. Do not allow to visit the link by typing on the url
 * -----------------------------------
 *          TO SEND DATA
 * -----------------------------------
 * 1. verify jwt token (send authorization token in the header ot the server). If possible use axios to send jwt token by intercepting the request
 * 2. if it is an admin activity. Make sure only admin user in posting data by using verifyAdmin
*/