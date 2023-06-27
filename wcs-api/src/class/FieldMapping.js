
/**
 * 
 * @date 09/06/2023 - 10:56:15
 *
 * @class FieldMapping
 * @typedef {FieldMapping}
 */
class FieldMapping {    
    /**
     * 
     * @date 09/06/2023 - 10:53:39
     *
     * @type {string}
     */
    _joinTable;
    
    /**
     * 
     * @date 09/06/2023 - 10:53:44
     *
     * @type {string}
     */
    _joinClause;
    
    /**
     * 
     * @date 09/06/2023 - 10:53:57
     *
     * @type {string}
     */
    _joinType;
    
    /**
     * 
     * @date 09/06/2023 - 10:54:02
     *
     * @type {*}
     */
    _query;

    /**
     * 
     * @date 09/06/2023 - 10:54:07
     *
     * @readonly
     * @type {*}
     */
    get query() {
        return this._query;
    }
    
    /**
     * Creates an instance of FieldMapping.
     * @date 09/06/2023 - 10:55:19
     *
     * @constructor
     * @param {string} [joinTable='']
     * @param {string} [joinTableAlias='']
     * @param {string} [joinClause='']
     * @param {string} [joinType='INNER']
     */
    constructor(joinTable = '', joinTableAlias = '', joinClause = '', joinType = 'INNER') {
        this._joinTable = `${joinTable} AS ${joinTableAlias}`;
        this._joinClause = joinClause;
        this._joinType = joinType;
        
        this._setQuery();
    }
    
    
    /**
     * 
     * @date 09/06/2023 - 10:55:08
     *
     * @param {string} [joinTable='']
     */
    setJoinTable(joinTable = '') {
        this._joinTable = `${joinTable} AS ${this.joinTableAlias}`;
        this._setQuery();
    }
     
    /**
     * 
     * @date 09/06/2023 - 10:54:53
     *
     * @param {string} [joinTableAlias='']
     */
    setJoinTableAlias(joinTableAlias = '') {
        this._joinTable = `${this.joinTable} AS ${joinTableAlias}`;
        this._setQuery();
    }

    
    /**
     * 
     * @date 09/06/2023 - 10:55:44
     *
     * @param {string} [joinClause='']
     */
    setJoinClause(joinClause = '') {
        this._joinClause = joinClause;
        this._setQuery();
    }

    
    /**
     * 
     * @date 09/06/2023 - 10:55:58
     *
     * @param {string} [joinType='']
     */
    setJoinClause(joinType = '') {
        this._joinType = joinType;
        this._setQuery();
    }
    
    
    /**
     * 
     * @date 09/06/2023 - 10:56:05
     */
    _setQuery() {
        this._query = `${this._joinType} JOIN ${this._joinTable} ON ${this._joinClause}`
    }
    
}


module.exports = FieldMapping;