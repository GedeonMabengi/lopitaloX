package com.lopitalo.app.data.repository

import com.lopitalo.app.data.local.dao.PropertyDao
import com.lopitalo.app.data.local.dao.PropertyUnitDao
import com.lopitalo.app.data.local.entity.PropertyEntity
import com.lopitalo.app.data.local.entity.PropertyUnitEntity
import javax.inject.Inject
import javax.inject.Singleton
import kotlinx.coroutines.flow.Flow

/**
 * Lecture « offline-first » : l'UI lit toujours la base locale (Room), qui est
 * alimentée par la synchronisation. Aucun appel réseau direct ici.
 */
@Singleton
class PropertyRepository @Inject constructor(
    private val propertyDao: PropertyDao,
    private val propertyUnitDao: PropertyUnitDao,
) {
    fun observeProperties(): Flow<List<PropertyEntity>> = propertyDao.observeAll()

    fun observeUnits(propertyId: Long): Flow<List<PropertyUnitEntity>> =
        propertyUnitDao.observeByProperty(propertyId)

    fun observeAllUnits(): Flow<List<PropertyUnitEntity>> = propertyUnitDao.observeAll()
}
